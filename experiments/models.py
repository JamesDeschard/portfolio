from django.db import models

from django.utils.translation import gettext_lazy as _

from parler.models import TranslatableModel, TranslatedFields

from ckeditor.fields import RichTextField

class Experiment(TranslatableModel):
    translations = TranslatedFields(
        title = models.CharField(max_length=128),
        image = models.ImageField(upload_to='experiments'),
        url = models.CharField(max_length=128),
        overview = RichTextField(),
        role = models.JSONField(default=list)
    )

    def __str__(self) -> str:
        return self.title