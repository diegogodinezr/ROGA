from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from inmobiliaria.views import *
from django.contrib.auth.views import LogoutView
from . import views

app_name = 'ventas'

urlpatterns = [
    url(r'^$',landing, name="landing"),
    path("login/", login, name="login_ventas"),
    path('logout/',LogoutView.as_view(next_page='/'), name='logout'),
]