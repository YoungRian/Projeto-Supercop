from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  
    path('contatos/', views.contato, name='contato'),
    path('encarte/', views.encarte, name='encarte'),
    path('lojas/', views.lojas, name='lojas'),
    path('momentos/', views.momentos, name='momentos'),
    path('sobre/', views.sobre, name='sobre'),
    path('enviar_curriculo/', views.enviar_curriculo, name='enviar_curriculo'),
    path('sucesso/', views.sucesso, name='sucesso'),  
]
