# Generated by Django 3.2.9 on 2022-05-16 20:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_order_payed'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='delivery',
            field=models.BooleanField(default=False),
        ),
    ]
