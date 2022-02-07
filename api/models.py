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
    title = models.CharField(max_length=50)
    image = models.ImageField(upload_to="staticfiles/images")
    price = models.DecimalField(max_digits=6 , decimal_places=2, default=10.00)
    description = models.TextField(max_length=200)
    note = models.TextField(max_length=200, default='')
    ingredients = models.TextField(max_length=300,default='')

    def __str__(self):
        return self.title


    
class Order(models.Model):
    
    code = models.IntegerField(default=generate_unique_code)
    time = models.DateTimeField(auto_now_add=True)
    ordered = models.ManyToManyField(Food)
    