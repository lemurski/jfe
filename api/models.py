from django.db import models

# Create your models here.

class Banner(models.Model):
    font_size = models.CharField(max_length=2)
    background_color = models.CharField(max_length=50)
    text_color = models.CharField(max_length=50)
    button_color = models.CharField(max_length=50)
    button_text_color = models.CharField(max_length=50)
    button_position = models.CharField(max_length=50)
    button_position_2 = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    user = models.CharField(max_length=50,unique=True)
    width = models.CharField(max_length=50)
    left = models.CharField(max_length=50)
    height = models.CharField(max_length=50)
