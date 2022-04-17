from django.db import models
from ckeditor.fields import RichTextField

from parler.models import TranslatableModel, TranslatedFields

class Post(TranslatableModel):
    translations = TranslatedFields(
        title = models.CharField(max_length=128),
        slug = models.SlugField(max_length=128),
        date = models.DateField(auto_now_add=True),
        length = models.IntegerField(),
        overview = RichTextField(),
        role = models.JSONField(default=list)
    )

    def __str__(self) -> str:
        return self.title
