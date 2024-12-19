from django.db import models

class Curriculo(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField()
    telefone = models.CharField(max_length=15)
    mensagem = models.TextField()
    curriculo_file = models.FileField(upload_to='curriculos/', null=True, blank=True) 

    def __str__(self):
        return self.nome
