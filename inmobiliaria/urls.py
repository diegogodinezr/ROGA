from django.contrib import admin
from django.urls import path
from django.conf.urls import url,include
from inmobiliaria.views import *
from django.contrib.auth.views import LogoutView
from . import views

app_name = 'ventas'

urlpatterns = [
    url(r'^$',landing, name="landing"),
    path("login_user/", login_user, name="login"),
    path('logout/',LogoutView.as_view(next_page='/'), name='logout'),
    path('register/', registro, name="registro"),
    path('about/', about, name="about"),
    path('servicios/', servicios, name="servicios"),
    path('propiedades/', propiedades, name="propiedades"),
    path('casas/', casas, name="casas"),
    path('departamentos/', depas, name="departamentos"),
    path('terrenos/', terrenos, name="terrenos"),
    path('casass/', casass, name="casass"),
]