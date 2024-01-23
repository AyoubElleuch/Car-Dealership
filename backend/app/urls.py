from django.urls import path, include
from .views import CarDetail, CarList

urlpatterns = [
    #path('api/', include('app.urls')),
    path('all/', CarList.as_view(), name='carList'),
    path('model/<int:pk>/', CarDetail.as_view(), name='carDetail'),
]
