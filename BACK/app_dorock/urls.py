from django.urls import path
from app_dorock import views

urlpatterns = [
    path('', views.index),
    path('tripInfo/'),
]

