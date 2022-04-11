from email.policy import default
from django.db import models
from ckeditor.fields import RichTextField


# Create your models here.

class Project(models.Model):
    title = models.CharField(max_length=128)
    slug = models.SlugField(max_length=128)
    sub_title = RichTextField()
    overview = RichTextField()
    role = models.JSONField(default=list)
    duration = models.CharField(max_length=128)
    outcomes = models.JSONField(default=list)
    # Problem Framing:
    who = RichTextField()
    when = RichTextField()
    where = RichTextField()
    why = RichTextField()
    # Goals
    goal = RichTextField()
    date = models.DateField(auto_now_add=True)


