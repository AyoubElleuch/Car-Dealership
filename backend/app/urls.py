from django.urls import path, include
from .views import CarList
from .views import CarDetail
#from .views import MyObtainTokenPairView
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
urlpatterns = [
    path('all/', CarList.as_view(), name='carList'),
    path('model/<int:pk>/', CarDetail.as_view(), name='carDetail'),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
