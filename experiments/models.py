from django.db import models

# Create your models here.

class Experiment(models.Model):
    title = models.CharField(max_length=128)
    slug = models.SlugField(max_length=128)
