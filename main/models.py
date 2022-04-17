from django.db import models
from django.core.mail import send_mail
from django.conf import settings
from ckeditor.fields import RichTextField
import os

from parler.models import TranslatableModel, TranslatedFields


# Create your models here.
class SendEmail(TranslatableModel):
    translations = TranslatedFields(
        title = models.CharField(max_length=128),
        overview = RichTextField()
    )

    def __str__(self) -> str:
        return self.title

    @staticmethod
    def send_email(send_to, sender=settings.EMAIL_HOST_USER, subject='Greetings from James Deschard'):
        with open(os.path.join(settings.BASE_DIR, 'main', 'email_content', 'email.txt'), 
        mode = 'r', encoding='utf-8') as content:
            message = content.read()
            send = send_mail(subject, message, sender, [send_to], fail_silently=False)
            content.close()
        return send


class Project(TranslatableModel):
    translations = TranslatedFields(    
        title = models.CharField(max_length=128),
        slug = models.SlugField(max_length=128),
        url = models.URLField(),
        sub_title = RichTextField(),
        overview = RichTextField(),
        role = models.JSONField(default=list),
        duration = models.CharField(max_length=128),
        outcomes = models.JSONField(default=list),
        # Problem Framing:
        problem_framing_overview = RichTextField(),
        who = RichTextField(),
        when = RichTextField(),
        where = RichTextField(),
        why = RichTextField(),
        # Goals
        goal_overview = RichTextField(),
        goal_sub_overview = RichTextField(),
        date = models.DateField(auto_now_add=True),
        # Insights
        points = models.JSONField(default=list)
    )

    def __str__(self) -> str:
        return self.title

class IntroductionParagraph(TranslatableModel):
    translations = TranslatedFields(    
        title = models.CharField(max_length=128),
        overview = RichTextField(),
        sub_overview = models.TextField(blank=True),
    )

    def __str__(self) ->str:
        return self.title


class Cards(TranslatableModel):
    translations = TranslatedFields(    
        overview = RichTextField(),
        status = models.BooleanField()
    )

