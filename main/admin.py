from django.contrib import admin

from .models import Project, SendEmail, Cards, IntroductionParagraph, ProjectImage

from parler.admin import TranslatableAdmin

class ProjectImageInline(admin.StackedInline):
    model = ProjectImage

@admin.register(Project)
class ProjectAdmin(TranslatableAdmin):
    inlines = [ProjectImageInline, ]

    class Meta:
        model = Project


admin.site.register(Cards, TranslatableAdmin)
admin.site.register(IntroductionParagraph, TranslatableAdmin)
admin.site.register(SendEmail, TranslatableAdmin)