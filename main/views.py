from django.shortcuts import render
from django.views import View

from .models import Project
from main.base_classes.base_classes import BaseAllPostPage, BasePostDetailPage


class HomePage(BaseAllPostPage):
    template_name = "main_templates/homepage.html"
    model_name = Project


class ProjectDetails(BasePostDetailPage):
    template_name = "detail_templates/project_page.html"
    model_name = Project


class AboutPage(View):
    template_name = "main_templates/aboutpage.html"

    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)
