from django.shortcuts import render, redirect
from .forms import CurriculoForm  
from .models import Curriculo
from django.http import HttpResponse



def home(request):
    return render(request, 'api/home.html')

def contato(request):
    return render(request, 'api/contato.html')

def encarte(request):
    return render(request, 'api/encarte.html')

def lojas(request):
    return render(request, 'api/lojas.html')

def momentos(request):
    return render(request, 'api/momentos.html')

def sobre(request):
    return render(request, 'api/sobre.html')    


def enviar_curriculo(request):
    if request.method == 'POST':
        form = CurriculoForm(request.POST, request.FILES)  
        if form.is_valid():
            form.save()  
            return redirect('sucesso')  
    else:
        form = CurriculoForm()

    return render(request, 'curriculo/formulario.html', {'form': form})

def sucesso(request):
    return render(request, 'curriculo/sucesso.html')  
