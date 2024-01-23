from django.db import models


class Car(models.Model):
    model = models.CharField(max_length=300)
    brand = models.CharField(max_length=300)
    make_year = models.IntegerField(default=2024)
    color = models.CharField(max_length=100,default="White")
    price = models.DecimalField(max_digits=12, decimal_places=3)
    availability = models.CharField(max_length=100,default="Available")
    picture = models.ImageField(upload_to="CarPictures")

    def __str__(self):
        return self.brand + ": " + self.model