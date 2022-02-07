from django.urls import path
from api import views

urlpatterns = [
    path('', views.FoodView.as_view()),
    path('menu',views.GetFood.as_view()),
    path('order', views.MakeOrder.as_view()),
    path('cart', views.AddToCart.as_view()),
    path('clear', views.ClearCart.as_view()),
    path('get_cart', views.GetCart.as_view()),
    path('get_orders', views.GetOrders.as_view()),
    path('delete_order', views.DeleteOrder.as_view()),
    path('payment', views.save_stripe_info.as_view())
]