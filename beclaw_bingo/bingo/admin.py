from dataclasses import field
from django.contrib import admin
from .models import Saying

# Register your models here.
class SayingAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,               {'fields': ['saying_text']}),
        ('Date information', {'fields': ['pub_date']}),
    ]

admin.site.register(Saying, SayingAdmin)