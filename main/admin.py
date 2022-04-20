from django.contrib import admin

from .models import Project, SendEmail, Cards, ProjectImage, IntroductionExperimentsParagraph, \
IntroductionAboutParagraph, IntroductionLecturesParagraph, IntroductionProjectsParagraph

from parler.admin import TranslatableAdmin

class ProjectImageInline(admin.StackedInline):
    model = ProjectImage

@admin.register(Project)
class ProjectAdmin(TranslatableAdmin):
    inlines = [ProjectImageInline, ]

    class Meta:
        model = Project

admin.site.register(IntroductionProjectsParagraph, TranslatableAdmin)
admin.site.register(IntroductionAboutParagraph, TranslatableAdmin)
admin.site.register(IntroductionLecturesParagraph, TranslatableAdmin)
admin.site.register(IntroductionExperimentsParagraph, TranslatableAdmin)
admin.site.register(Cards, TranslatableAdmin)
admin.site.register(SendEmail, TranslatableAdmin)