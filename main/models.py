from django.db import models

# Create your models here.
class todoList(models.Model):
    text=models.CharField(max_length=200)
    compeleted=models.BooleanField(default=False)
     

