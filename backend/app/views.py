from .models import Car
from .serializers import CarSerializer
from rest_framework import generics
from rest_framework import permissions

class CarList(generics.ListCreateAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Car.objects.all()
    serializer_class = CarSerializer    


class CarDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Car.objects.all()
    serializer_class = CarSerializer
