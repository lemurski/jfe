from django.urls import re_path

from .consumers import OrderConsumer



websocket_url_patterns = [
    re_path(r'ws/order_socket', OrderConsumer.as_asgi()),
]