from django.urls import path
from frontend import views

urlpatterns = [
    path('', views.index),
    path('cart/<slug:id>', views.index),
    path('orders', views.index),
    path('checkout/<slug:id>', views.index),
    path('complete', views.index),
    path('payment/<slug:id>', views.index),
    path('table/<slug:id>', views.index),
    path('kontakt', views.index),
    path('choice', views.index),
    path('delivery', views.index),
    path('kasa', views.index),
    path('kasa_koszyk', views.index),
    path('klient', views.index),
    path('kasa_platnosc', views.index)
]

