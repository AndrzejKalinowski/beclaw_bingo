# Generated by Django 4.0.3 on 2022-03-30 08:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bingo', '0002_saying_delete_choice_delete_question'),
    ]

    operations = [
        migrations.CreateModel(
            name='Players',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('player_name', models.CharField(max_length=200)),
            ],
        ),
    ]
