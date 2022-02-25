import json
from channels.generic.websocket import WebsocketConsumer
from .models import Order, Food, FoodQuantity
from .serializers import OrderSerializer
from asgiref.sync import async_to_sync


class OrderConsumer(WebsocketConsumer):

    def connect(self):
        
        self.room_group_name = 'orders'
        
        async_to_sync(self.channel_layer.group_add)(
            self.room_group_name,
            self.channel_name
        )
        
        self.accept()

        queryset = Order.objects.all()

        serializer = OrderSerializer(queryset, many=True)

        

        self.send(json.dumps(serializer.data))
    
    def disconnect(self, close_code):
        pass


    def receive(self, text_data):
        text_data_json = json.loads(text_data)

        message = text_data_json['message']

        t = text_data_json['table']


        

        print(message)

        
        order = Order.objects.create(table=t,payed=False)
        order.save()
        


        for i in message:
            item = Food.objects.get(id=i['id'])


            if 'note' in i:
                f_num = FoodQuantity(food=item,order = order, number = i['num'], note=i['note'])
            else:
                f_num = FoodQuantity(food=item,order = order, number = i['num'])


                
            
            f_num.save()
            print(f_num)
       
        
        


        async_to_sync(self.channel_layer.group_send)(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
            }
        )

    
    def chat_message(self, event):
        message = event['message']

        # Send message to WebSocket
        self.send(text_data=json.dumps({
            'type': 'addOrder',
            'message': message
        }))