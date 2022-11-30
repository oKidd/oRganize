from django.db import models


# Create your models here.
class Usuario(models.Model):
    email = models.CharField(max_length=100)
    clave = models.CharField(max_length=60)
    username = models.CharField(max_length=30)
    nombre = models.CharField(max_length=30)
    apellido = models.CharField(max_length=30)
    nacimiento = models.DateField()

class Icon(models.Model):
    name = models.CharField(max_length=100)