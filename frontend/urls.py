from django.urls import path
from frontend import views

urlpatterns = [
    path('', views.index),
    path('cart/', views.index),
    path('orders', views.index),
    path('checkout', views.index),

]

