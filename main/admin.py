from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'title',
        'slug',
        'sub_title',
        'overview',
        'role',
        'duration',
        'outcomes',
        'who',
        'when',
        'where',
        'why',
        'goal',
    )
    search_fields = ('slug',)