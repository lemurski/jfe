from django.urls import path
from frontend import views

urlpatterns = [
    path('', views.index),
    path('generate/', views.index),
    path('portfolio/', views.index),

]