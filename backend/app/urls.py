from django.urls import path, include
from .views import CarList
from .views import CarDetail

urlpatterns = [
    path('all/', CarList.as_view(), name='carList'),
    path('model/<int:pk>/', CarDetail.as_view(), name='carDetail'),
]
