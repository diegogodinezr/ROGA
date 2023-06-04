from django.shortcuts import render
from .forms import *
from .models import *
from django.shortcuts import redirect
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.contrib.auth import authenticate, login
from django.contrib import messages

#====================LOGIN====================
def login_user(request):
    if request.user.is_authenticated:
        return redirect('/')
    else:
        if request.method == 'POST':
            username = request.POST.get('username')
            password =request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('/')
            else:
                messages.info(request, 'Username OR password is incorrect')

        context = {}
        return render(request, 'login.html', context)
    
#====================LANDING====================
def landing(request):
    template_to_return='landing.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)
#======================REGISTRO=================
def registro(request):
    if request.user.is_authenticated:
        return redirect('/')
    else:
        form = CreateUserForm()
        if request.method=='POST':
            form= CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                user=form.cleaned_data.get('username')
                messages.success(request,'La cuenta ha sido creada para:'+ user)
                return redirect('/')

        context={'form':form}
        return render(request,'register.html',context)
    
#====================ABOUT====================
def about(request):
    template_to_return='about.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)

#====================SERVICIOS====================
def servicios(request):
    template_to_return='servicios.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)

#====================PROPIEDADES====================
def propiedades(request):
    template_to_return='propiedades.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)

#====================CASAS====================
def casas(request):
    template_to_return='casas.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)
#====================CASAS ONLY====================
def casass(request):
    template_to_return='casass.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)
#====================terrenos====================
def terrenos(request):
    template_to_return='terrenos.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)
#====================depas====================
def depas(request):
    template_to_return='depas.html'
    context={ 
        'view_name': "landing1",
    }
    return render (request,template_to_return,context)
