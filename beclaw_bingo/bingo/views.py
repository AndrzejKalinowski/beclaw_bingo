from django.shortcuts import render
from django.http import HttpResponse
from .models import Saying
# Create your views here.
def index(request):
    # return HttpResponse("Hello, world. You're at the bęcław bingo index.")
    # latest_question_list = Saying.objects.order_by('-pub_date')[:5]
    # context = {'latest_question_list': latest_question_list}
    context = {'sayings': Saying.objects.all()}
    return render(request, 'bingo/index.html', context)

def game(request):
    return render(request, 'bingo/game.html')  
