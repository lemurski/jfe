from django.db.models import fields
from rest_framework import serializers
from api import models

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Banner
        fields = ('id','font_size','background_color','text_color','button_color','button_text_color','button_position','position','button_position_2','width','height','left')



class BannerSerializerAPI(serializers.ModelSerializer):
    class Meta:
        model = models.Banner
        fields = ('id','font_size','background_color','text_color','button_color','button_text_color','button_position','position','user','button_position_2','width','height','left')