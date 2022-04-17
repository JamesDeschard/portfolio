from django.contrib import admin

from .models import Experiment

from parler.admin import TranslatableAdmin

admin.site.register(Experiment, TranslatableAdmin)
