from django.shortcuts import render
from django.urls import reverse
from django.shortcuts import redirect

def home(request):
    return render(request, 'home.html')

def login(request):
    return render(request, 'login.html')
