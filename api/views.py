from django.shortcuts import render

from django.db.models import query
from django.http.response import JsonResponse
from django.shortcuts import render
from rest_framework import generics, status

from .models import Banner
from .serializers import BannerSerializer, BannerSerializerAPI
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class BannerView(generics.ListCreateAPIView):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializerAPI

class GetBanner(APIView):
    serializer_class = BannerSerializer

    def get(self,request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        user = self.request.session.session_key

        banner = Banner.objects.filter(user=user)

        if len(banner) > 0:
            data = BannerSerializer(banner[0]).data
            return Response(data, status=status.HTTP_200_OK)
        return Response({'Save a banner first!' : 'No data yet'}, status=status.HTTP_404_NOT_FOUND)


        

class CreateBanner(APIView):
    serializer_class = BannerSerializer

    def post(self,request,format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            font_size = serializer.data.get('font_size')
            background_color = serializer.data.get('background_color')
            text_color = serializer.data.get('text_color')
            button_color = serializer.data.get('button_color')
            button_text_color = serializer.data.get('button_text_color')
            button_position = serializer.data.get('button_position')
            position = serializer.data.get('position')
            user = self.request.session.session_key

            queryset = Banner.objects.filter(user=user)

            if queryset.exists():
                banner = queryset[0]
                banner.font_size = font_size
                banner.background_color = background_color
                banner.text_color = text_color               
                banner.button_color = button_color
                banner.button_text_color = button_text_color
                banner.button_position = button_position
                banner.position = position
                banner.save(update_fields=['position','text_color','background_color','font_size','button_color','button_text_color','button_position'])
                return Response(BannerSerializer(banner).data, status=status.HTTP_200_OK)
            else:
                banner = Banner(user=user,position=position,text_color=text_color,button_color=button_color,button_position=button_position,font_size=font_size,background_color=background_color,button_text_color=button_text_color,)
                banner.save()
                return Response(BannerSerializer(banner).data, status=status.HTTP_201_CREATED)
        return Response({'Bad request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)