from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.



def index(request,*args, **kwargs):
    return render(request, 'frontend/index.html')



def not_found(request,exception,*args, **kwargs):
    return render(request, 'frontend/index.html')
