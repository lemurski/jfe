from django.shortcuts import render

from django.db.models import query
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import generics, status
import json
from .models import Food
from .serializers import FoodSerializer, OrderSerializer
from .models import Order
import stripe
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.

stripe.api_key = 'sk_test_51KPqVjIe60pKGrAO6aLqyykqdVXnvNLlivtfrlQGMSgqtciN7ZTemLmWb7u0zyUoxOljg6NAzn0T1vJvrKq1IBPy00ss1E6kUK'


class save_stripe_info(APIView):
    
    def post(self, request, format=None):
        intent = stripe.PaymentIntent.create(
            amount='150',
            currency='eur',
            automatic_payment_methods={
                'enabled': True,
            },
        )
        
        return Response(status=status.HTTP_200_OK,data={
            'clientSecret': intent['client_secret']
        })

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

class GetFood(APIView):

    def get(self, request, format=None):

        queryset = Food.objects.all()

        serializer = FoodSerializer(queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)

class GetCart(APIView):

    def get(self, request, format=None):
        
        if 'cart' in self.request.session:
            data= self.request.session['cart']
            
        else:
            self.request.session['cart'] = []
            data = self.request.session['cart']
        return Response(data, status=status.HTTP_200_OK)


class AddToCart(APIView):    

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        item = request.data['cart']
        

        
        if 'cart' in self.request.session:
            order = self.request.session['cart']
            order.append(item)
            (self.request.session['cart']) = order
            print('tutaj')
        else:
            self.request.session['cart'] = []
            order = self.request.session['cart']
            order.append(item)
            (self.request.session['cart']) = order            
            print('reset')

        data = self.request.session['cart']
            

        print(data)

        return Response(data, status=status.HTTP_200_OK)
       
            

class ClearCart(APIView):

    def post(self, request, format=None):

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





class MakeOrder(APIView):

    def post(self, request, format=None):

        if request.data['cart']:
            lst = request.data['cart']
            
            order = Order.objects.create()
            order.save()
            print(lst)


            for id in lst:
                item = Food.objects.get(id=id)
                order.ordered.add(item)
                print(item)

            print('Done!')
            
            print(order.ordered.all())
            
            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)