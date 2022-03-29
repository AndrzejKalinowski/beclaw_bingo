from django.shortcuts import render
from django.http import HttpResponse
from .models import saying
# Create your views here.
def index(request):
    # return HttpResponse("Hello, world. You're at the bęcław bingo index.")
    # latest_question_list = saying.objects.order_by('-pub_date')[:5]
    # context = {'latest_question_list': latest_question_list}
    return render(request, 'index.html')

def game(request):
    return HttpResponse("<h2>Beclaw Bingo!<h2>")