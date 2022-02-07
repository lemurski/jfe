from django.db.models import fields
from rest_framework import serializers
from api import models

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Food
        fields = ('id', 'title', 'description', 'image', 'price','note', 'ingredients')


class OrderSerializer(serializers.ModelSerializer):

    ordered = FoodSerializer(read_only=True, many=True)

    class Meta:
        model = models.Order
        fields = ('id', 'ordered','code')