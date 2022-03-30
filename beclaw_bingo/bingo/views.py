from django.shortcuts import render
from django.http import HttpResponse
from .models import Saying
# Create your views here.
def index(request):
    # latest_question_list = Saying.objects.order_by('-pub_date')[:5]
    # context = {'saying_list': Saying.objects.all()}
    return render(request, 'bingo/index.html')

def game(request):
    context = {'saying_list': Saying.objects.all()}
    return render(request, 'bingo/game.html', context)  

# def addplayer(request, player_name):
#     # return HttpResponse("player "+ player_id)
#     player = Players(player_name=player_name)
#     player.save()
#     return HttpResponse('player ' + player_name + str(player.id))

# def endgame(request):
#     Players.objects.all().delete()
#     return HttpResponse("deleted all players")