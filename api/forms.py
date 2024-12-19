from django import forms
from .models import Curriculo

class CurriculoForm(forms.ModelForm):
    class Meta:
        model = Curriculo
        fields = ['nome', 'email', 'telefone', 'mensagem']
        widgets = {
            'nome': forms.TextInput(attrs={'placeholder': 'Seu nome*'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Seu e-mail*'}),
            'telefone': forms.TextInput(attrs={'placeholder': 'Telefone para contato*'}),
            'mensagem': forms.Textarea(attrs={'placeholder': 'Insira sua mensagem*', 'rows': 5}),
        }
