from django.urls import path
from frontend import views

urlpatterns = [
    path('', views.index),
    path('cart/', views.index),
    path('orders', views.index),
    path('checkout', views.index),
    path('complete', views.index),
    path('payment', views.index),
    path('table/<int:id>', views.index),
]

