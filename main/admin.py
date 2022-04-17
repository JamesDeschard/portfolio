from django.contrib import admin

from .models import Project, SendEmail, IntroductionParagraph, Cards

from parler.admin import TranslatableAdmin

admin.site.register(IntroductionParagraph, TranslatableAdmin)
admin.site.register(Project, TranslatableAdmin)
admin.site.register(Cards, TranslatableAdmin)
admin.site.register(SendEmail, TranslatableAdmin)