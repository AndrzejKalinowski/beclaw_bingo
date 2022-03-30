from unicodedata import name
from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('gameplay/', views.game, name='game'),
    # path('<player_name>/addplayer/', views.addplayer, name='addplayer'),
    # path('endgame', views.endgame, name='endgame')
]