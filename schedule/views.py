from django.shortcuts import render
from schedule.forms import UserForm
from schedule.models import Icon


# Create your views here.\
def index(request):
    return render(request, 'index.html')

def register(request):
    form = UserForm
    data = {'form': form}
    return render(request, 'register.html', data)


def iconlist(request):
    iconlist = Icon.objects.all()
    data = {'iconlist': iconlist}
    return render(request, 'iconlist.html', data)
