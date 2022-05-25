from django.db.models import fields
from rest_framework import serializers
from api import models


class FoodQuantitySerializer(serializers.ModelSerializer):
    
    item = serializers.ReadOnlyField(source='food.title')
    
    class Meta:
        model = models.FoodQuantity
        fields = ('number', 'item','note','dodatkowe_mieso','frytki','bataty','kulki','krazki')

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Food
        fields = ('id', 'title', 'description', 'image', 'price','note', 'ingredients','category','number')


class OrderSerializer(serializers.ModelSerializer):

    ordered = FoodQuantitySerializer(source='foodquantity_set',read_only=True, many=True)
    

    class Meta:
        model = models.Order
        fields = ('id','ordered','code','table','payed','ulica','imie','notatka','kod','miasto','budynek','delivery')


