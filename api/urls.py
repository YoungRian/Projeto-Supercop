from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # A URL raiz do app 'api' é mapeada para a view 'home'
]
