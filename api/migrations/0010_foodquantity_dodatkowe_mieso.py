# Generated by Django 3.2.9 on 2022-05-19 16:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20220516_2302'),
    ]

    operations = [
        migrations.AddField(
            model_name='foodquantity',
            name='dodatkowe_mieso',
            field=models.BooleanField(default=False),
        ),
    ]
