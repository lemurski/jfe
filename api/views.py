from django.shortcuts import render

from django.db.models import query
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import generics, status
import json
from .models import Food, FoodQuantity
from .serializers import FoodSerializer, OrderSerializer
from .models import Order
import stripe
from rest_framework.views import APIView
from rest_framework.response import Response
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer
from django_eventstream import send_event
# Create your views here.

stripe.api_key = 'sk_test_51KPqVjIe60pKGrAO6aLqyykqdVXnvNLlivtfrlQGMSgqtciN7ZTemLmWb7u0zyUoxOljg6NAzn0T1vJvrKq1IBPy00ss1E6kUK'


class save_stripe_info(APIView):
    
    def post(self, request, format=None):

        cart=request.data['cart']
        print(cart)

        price = 0
        cart = json.loads(cart)

        for i in cart:
            price+=(i['price_combined'])
        
        price=price*100
        price=int(price)
        price = str(price)

        intent = stripe.PaymentIntent.create(
            amount=price,
            currency='eur',
            metadata={'cart':request.data['cart'],'table':request.data['table']},
            automatic_payment_methods={
                'enabled': True,
            },
        )


        return Response(status=status.HTTP_200_OK,data={
            'clientSecret': intent['client_secret']
        })


# @csrf_exempt
# def webhook(request):


        
#     print('hi')
#     event = None
#     payload = request.data

#     try:
#         event = json.loads(payload)
#     except:
#         print('Webhook error while parsing basic request.')
#         return Response(status=status.HTTP_400_BAD_REQUEST)

#     # Handle the event
#     if event and event['type'] == 'payment_intent.succeeded':
#         payment_intent = event['data']['object']  # contains a stripe.PaymentIntent
#         print('Payment for {} succeeded'.format(payment_intent['amount']))
#         # Then define and call a method to handle the successful payment intent.
#         # handle_payment_intent_succeeded(payment_intent)
#     elif event['type'] == 'payment_method.attached':
#         payment_method = event['data']['object']  # contains a stripe.PaymentMethod
#         # Then define and call a method to handle the successful attachment of a PaymentMethod.
#         # handle_payment_method_attached(payment_method)
#     else:
#         # Unexpected event type
#         print('Unhandled event type {}'.format(event['type']))

#     return Response(status=status.HTTP_200_OK)


class webhook(APIView):

    def post(self, request, format=None):
        
        print('KURWAAAAAAAAAAAAAAAA')

        event = None
        payload = request.data
        event = payload

        # channel_layer = get_channel_layer()

        print(event['type'])

        # try:
        #     event = json.loads(payload)
        # except:
        #     print('Webhook error while parsing basic request.')
        #     return Response(status=status.HTTP_400_BAD_REQUEST)

        # Handle the event
        if event and event['type'] == 'payment_intent.succeeded':
            payment_intent = event['data']['object']  # contains a stripe.PaymentIntent
            print('Payment for {} succeeded'.format(payment_intent['amount']))

            message = json.loads(payment_intent['metadata']['cart'])
            t = json.loads(payment_intent['metadata']['table'])

            order = Order.objects.create(table=t,payed=True)
            order.save()
            


            for i in message:
                item = Food.objects.get(id=i['id'])


                if 'note' in i and i['note'] != None:
                    f_num = FoodQuantity(food=item,order = order, number = i['num'], note=i['note'], dodatkowe_mieso=i['turbo'], frytki=i['frytki'], bataty=i['bataty'], kulki=i['kulki'], krazki=i['krazki'])
                else:
                    f_num = FoodQuantity(food=item,order = order,dodatkowe_mieso=i['turbo'], number = i['num'], frytki=i['frytki'], bataty=i['bataty'], kulki=i['kulki'], krazki=i['krazki'])



                
                    
                
                f_num.save()

            if 'cart' in request.session:
                del self.request.session['cart']

            send_event('test', 'message', {'text': 'hello world'})

            
            # async_to_sync(channel_layer.group_send)(
            #     'orders',
            #     {
            #         'type': 'chat_message',
            #         'message': 'event',
            #     }
            # )
            # Then define and call a method to handle the successful payment intent.
            # handle_payment_intent_succeeded(payment_intent)
        elif event['type'] == 'payment_method.attached':
            payment_method = event['data']['object']  # contains a stripe.PaymentMethod
            # Then define and call a method to handle the successful attachment of a PaymentMethod.
            # handle_payment_method_attached(payment_method)
        else:
            # Unexpected event type
            print('Unhandled event type {}'.format(event['type']))

        return Response(status=200)

# class save_stripe_info(APIView):    
    
#     def post(self, request,format=None):
    
#         email = request.data['email']
#         payment_method_id = request.data['payment_method_id']
#         extra_msg = ''

#         customer_data = stripe.Customer.list(email=email).data   
        
#         if len(customer_data) == 0:
#             customer = stripe.Customer.create(
#             email=email, payment_method=payment_method_id)
#         else:
#             customer = customer_data[0]
#             extra_msg = "Customer already existed."

#         stripe.PaymentIntent.create(
#         customer=customer, 
#         payment_method=payment_method_id,  
#         currency='pln',
#         amount=1500,
#         confirm=True)       
        
#         return Response(status=status.HTTP_200_OK, data={
#             'message': 'Success', 
#             'data': {'customer_id': customer.id,
#             'extra_msg': extra_msg}
#             }  
#         )                                          


class FoodView(generics.ListCreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer


class SetCart(APIView):
    def post(self, request, format=None):

        cart = request.data['cart']

        print(cart)

        self.request.session['cart'] = cart
        send_event('test', 'kasa', {'text': 'hello world'})


        data = self.request.session['cart']

        return Response(data, status=status.HTTP_200_OK)

class GetFood(APIView):

    def get(self, request, format=None):

        queryset = Food.objects.all()

        serializer = FoodSerializer(queryset, many=True)

        lst = [{
            'category' : ['Przystawki','Burgery','Podrasuj Burger', 'Sałatki', 'Dla Dzieci']
        }]

        data = serializer.data + lst


        return Response((serializer.data + lst), status=status.HTTP_200_OK)

class GetCart(APIView):

    def get(self, request, format=None):
        
        if 'cart' in self.request.session:
            data= self.request.session['cart']
            
        else:
            self.request.session['cart'] = []
            data = self.request.session['cart']
        return Response(data, status=status.HTTP_200_OK)


class AddtoCartKasa(APIView):
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        item = request.data['cart']
        price = request.data['price']
        
        
        print(item)
        
        if 'cart' in self.request.session:
            order = self.request.session['cart']
            
            item_in_order = False

            for o in order:
                if o['item'] == item:
                    o['num'] += 1
                    o['price_combined'] = o['price']*o['num']
                    item_in_order = True
            
            if not item_in_order:
                item_num = {'item': item, 'num':1, 'price': price, 'price_combined':price}
                order.append(item_num)

            (self.request.session['cart']) = order
                

        else:
            self.request.session['cart'] = []
            order = self.request.session['cart']
            item_num = {'item': item, 'num':1,'price': price, 'price_combined':price}
            order.append(item_num)
            print('here')
            (self.request.session['cart']) = order            

        data = self.request.session['cart']

        print(data)

        send_event('test', 'kasa', {'text': 'hello world'})
        

        return Response(data, status=status.HTTP_200_OK)


class AddToCart(APIView):    

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        item = request.data['cart']
        price = request.data['price']
        
        
        print(item)
        
        if 'cart' in self.request.session:
            order = self.request.session['cart']
            
            item_in_order = False

            for o in order:
                if o['item'] == item:
                    o['num'] += 1
                    o['price_combined'] = o['price']*o['num']
                    item_in_order = True
            
            if not item_in_order:
                item_num = {'item': item, 'num':1, 'price': price, 'price_combined':price}
                order.append(item_num)

            (self.request.session['cart']) = order
                

        else:
            self.request.session['cart'] = []
            order = self.request.session['cart']
            item_num = {'item': item, 'num':1,'price': price, 'price_combined':price}
            order.append(item_num)
            print('here')
            (self.request.session['cart']) = order            

        data = self.request.session['cart']

        print(data)


        return Response(data, status=status.HTTP_200_OK)
       
            

class ClearCart(APIView):

    def post(self, request, format=None):
        
        if 'cart' in request.session:
            del self.request.session['cart']

        return Response(status=status.HTTP_200_OK)

class DeleteOrder(APIView):
    
    def post(self, request, format=None):
        
        id = request.data['id']

        order = Order.objects.get(id=id)

        order.delete()

        return Response(status=status.HTTP_200_OK)


class GetOrders(APIView):

    def get(self, request, format=None):

        queryset = Order.objects.all()

        serializer = OrderSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)



class ChangeToPaid(APIView):
    def post(self, request, format=None):

        i = request.data['id']

        order = Order.objects.get(id=i)

        order.payed = True

        order.save()
        
        return Response(status=status.HTTP_200_OK)




class MakeOrder(APIView):

    def post(self, request, format=None):

        

        if request.data['cart']:
            message = request.data['cart']

            if 'ulica' in request.data:
                ulica = request.data['ulica']
                budynek = request.data['budynek']
                kod = request.data['kod']
                miasto = request.data['miasto']
                notatka = request.data['notatka']
                imie = request.data['imie']

                order = Order.objects.create(delivery=True,payed=False,ulica=ulica,budynek=budynek,kod=kod,miasto=miasto,notatka=notatka,imie=imie)
                order.save()
                
                for i in message:
                    item = Food.objects.get(id=i['id'])

                    if 'note' in i and i['note'] != None:
                        f_num = FoodQuantity(food=item,order = order, number = i['num'], note=i['note'], dodatkowe_mieso=i['turbo'], frytki=i['frytki'], bataty=i['bataty'], kulki=i['kulki'], krazki=i['krazki'])
                    else:
                        f_num = FoodQuantity(food=item,order = order,dodatkowe_mieso=i['turbo'], number = i['num'], frytki=i['frytki'], bataty=i['bataty'], kulki=i['kulki'], krazki=i['krazki'])


                        
                    
                    f_num.save()
                
                send_event('test', 'message', {'text': 'hello world'})

                if 'cart' in request.session:
                    del self.request.session['cart']

                
                return Response(status=status.HTTP_200_OK)
            else:

                t = request.data['table']

                
                order = Order.objects.create(table=t,payed=False)
                order.save()
                


                for i in message:
                    item = Food.objects.get(id=i['id'])


                    if 'note' in i and i['note'] != None:
                        f_num = FoodQuantity(food=item,order = order, number = i['num'], note=i['note'], dodatkowe_mieso=i['turbo'], frytki=i['frytki'], bataty=i['bataty'], kulki=i['kulki'], krazki=i['krazki'])
                    else:
                        f_num = FoodQuantity(food=item,order = order,dodatkowe_mieso=i['turbo'], number = i['num'], frytki=i['frytki'], bataty=i['bataty'], kulki=i['kulki'], krazki=i['krazki'])


                        
                    
                    f_num.save()

                if 'cart' in request.session:
                    del self.request.session['cart']

                
                send_event('test', 'message', {'text': 'hello world'})
    
                
                return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)