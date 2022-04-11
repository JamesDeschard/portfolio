from django.db import models
from ckeditor.fields import RichTextField

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=128)
    slug = models.SlugField(max_length=128)
    date = models.DateField(auto_now_add=True)
    length = models.IntegerField()
    text = RichTextField()
    tags = models.JSONField(default=list)

    def __str__(self):
        return self.title
