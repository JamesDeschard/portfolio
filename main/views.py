from django.shortcuts import render

from .models import Project, IntroductionProjectsParagraph, IntroductionAboutParagraph
from main.base_classes.base_classes import BaseAllPostPage, BasePostDetailPage
from .forms import EmailForm


class HomePage(BaseAllPostPage):
    template_name = "main_templates/homepage.html"
    post_model_name = Project
    intro_model = IntroductionProjectsParagraph

    def get(self, request, *args, **kwargs):

        randoms = self.get_random_amount(3)
        ipad, iphones = randoms[0], randoms[1:]
        projects = self.get_all_post_model_instances()
        more = list(filter(lambda object: object not in randoms, projects))

        context = {
            'introduction': self.get_intro_data(),
            'ipad': ipad,
            'iphones': iphones,
            'more': more,
            'email': self.get_email(),
            'form': EmailForm()
        }
        return render(request, self.template_name, context)


class AboutPage(BaseAllPostPage):
    template_name = "main_templates/aboutpage.html"
    intro_model = IntroductionAboutParagraph

    def get(self, request, *args, **kwargs):
        context = {
            'introduction': self.get_intro_data(),
            'cards': self.get_cards(),
            'email': self.get_email(),
            'form': EmailForm()
        }
        return render(request, self.template_name, context)


class ProjectDetails(BasePostDetailPage):
    template_name = "detail_templates/project_page.html"
    model_name = Project

    def get(self, request, *args, **kwargs):
        current_project = self.get_current_model_instance(kwargs['slug'])
        context = {
            'detail_page': True,
            'more': self.get_more(),
            'current': current_project,
            'more_images': self.get_project_images(current_project)
        }
        return render(request, self.template_name, context)
