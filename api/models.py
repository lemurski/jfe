from re import S
from django.db import models

# Create your models here.

def generate_unique_code():
    code = 1

    while True:
        if Order.objects.filter(code=code).count() == 0:
            break
        else:
            code += 1
        

    return code


class Food(models.Model):

    Burgery = 'Burgery'
    Przystawki = 'Przystawki'
    Podrasuj_Burger = 'Podrasuj Burger'
    Sałatki = 'Sałatki'
    Dla_Dzieci = 'Dla Dzieci'

    choices = [
        (Burgery, 'Burgery'),
        (Przystawki, 'Przystawki'),
        (Podrasuj_Burger, 'Podrasuj Burger'),
        (Sałatki, 'Sałatki'),
        (Dla_Dzieci, 'Dla Dzieci')
    ]

    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="staticfiles/images")
    price = models.DecimalField(max_digits=6 , decimal_places=2, default=10.00)
    description = models.TextField(max_length=200)
    note = models.TextField(max_length=200, default='')
    ingredients = models.TextField(max_length=300,default='')
    category = models.CharField(max_length=50, choices=choices, default=Burgery)
    number = models.IntegerField(default=1)

    

    def __str__(self):
        return self.title



    
class Order(models.Model):
    
    code = models.IntegerField(default=generate_unique_code)
    time = models.DateTimeField(auto_now_add=True)
    table = models.IntegerField(blank=True, null=True)
    notatka = models.CharField(max_length=100, blank=True, null=True)
    ulica = models.CharField(max_length=100, blank=True, null=True)
    imie = models.CharField(max_length=100, blank=True, null=True)
    budynek = models.CharField(max_length=100, blank=True, null=True)
    miasto = models.CharField(max_length=100, blank=True, null=True)
    kod = models.CharField(max_length=100, blank=True, null=True)
    delivery = models.BooleanField(default=False)
    ordered = models.ManyToManyField(Food, through='FoodQuantity')
    payed = models.BooleanField(default=True)


class FoodQuantity(models.Model):
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    number = models.IntegerField(default=1)
    note = models.CharField(max_length=200, blank=True)
    code = models.IntegerField(default=generate_unique_code)
    