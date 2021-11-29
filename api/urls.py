from django.urls import path
from api import views

urlpatterns = [
    path('create-banner', views.CreateBanner.as_view()),
    path('', views.BannerView.as_view()),
    path('get-banner', views.GetBanner.as_view()),

]