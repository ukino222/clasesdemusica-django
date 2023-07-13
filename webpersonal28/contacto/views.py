from django.shortcuts import render
from .models import Project

# Create your views here.

def contacto(request):
    projects = Project.objects.all()
    return render(request, "contacto/contacto.html", {'projects':projects})