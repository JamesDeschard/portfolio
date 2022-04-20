import random

from django.shortcuts import render, get_object_or_404
from django.views import View
from django.http import JsonResponse
from django.utils.translation import get_language

from main.forms import EmailForm
from main.models import Project, SendEmail, Cards, ProjectImage


class BaseAllPostPage(View):
    template_name = ""
    post_model_name = ""
    intro_model = ""

    def get_cards(self):
        return Cards.objects.all()

    def get_random_amount(self, amount):
        model_objects = list(self.get_all_post_model_instances())
        random_items = random.sample(model_objects, amount)
        return random_items

    def get_intro_data(self):
        return self.intro_model.objects.first()

    def get_all_post_model_instances(self):
        return self.post_model_name.objects.all()

    def get_email(self):
        return SendEmail.objects.active_translations(title='Reach out for more?')[0]

    def get(self, request, *args, **kwargs):
        context = {
            'introduction': self.get_intro_data(),
            'more': self.get_all_post_model_instances(),
            'email': self.get_email(),
            'form': EmailForm()
        }
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = EmailForm(request.POST)
        validity = form.is_valid()
        if validity:
            user_email_adress = form.cleaned_data['email']
            SendEmail.send_email(user_email_adress)
            return JsonResponse({'form': validity})
        else:
            return JsonResponse({'form': validity, 'language': get_language()})


class BasePostDetailPage(View):
    template_name = ""
    model_name = ""

    def get_more(self):
        return self.model_name.objects.all()

    def get_project_images(self, current_project):
        project = get_object_or_404(Project, id=current_project.id)
        images = ProjectImage.objects.filter(project=project)
        return list(map(lambda current: current.image.url, images))

    def get_current_model_instance(self, slug_name):
        return self.model_name.objects.active_translations(slug=slug_name)[0]

    def get(self, request, *args, **kwargs):
        current_project = self.get_current_model_instance(kwargs['slug'])
        context = {
            'detail_page': True,
            'more': self.get_more(),
            'current': current_project
        }
        return render(request, self.template_name, context)
