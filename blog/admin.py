from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'slug', 'date', 'length', 'text', 'tags')
    list_filter = ('date',)
    search_fields = ('slug',)
    prepopulated_field = {"slug": ("title",)}