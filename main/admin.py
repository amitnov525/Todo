from django.contrib import admin
from main.models import todoList

# Register your models here.
@admin.register(todoList)
class Display(admin.ModelAdmin):
    list_display=['text','compeleted']


