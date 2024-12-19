from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api.urls')),  # A URL raiz agora é mapeada para as URLs do app 'api'
]

