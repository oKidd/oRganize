from django import forms
from schedule.models import Usuario


class UserForm(forms.ModelForm):
    class Meta:
        model = Usuario
        fields = '__all__'

    email = forms.CharField(widget=forms.TextInput(attrs={'class': ""}))
    clave = forms.CharField(max_length=60)
    username = forms.CharField(max_length=30)
    nombre = forms.CharField(max_length=30)
    apellido = forms.CharField(max_length=30)
    nacimiento = forms.DateField(widget=forms.SelectDateWidget())