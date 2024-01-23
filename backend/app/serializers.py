from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['id', 'model', 'brand', 'price', 'make_year','color','availability', 'picture']

"""
 make_year = models.DateField(default=2024)
    color = models.CharField(default="White")
    availability

model = models.CharField(max_length=300)
    brand = models.CharField(max_length=300)
    price = models.DecimalField(max_digits=12, decimal_places=3)
    picture 
"""
