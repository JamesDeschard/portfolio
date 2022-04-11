from django.shortcuts import render
from django.views import View

class BaseAllPostPage(View):
    template_name = ""
    model_name = ""

    def get_all_model_instances(self):
        return self.model_name.objects.all()

    def get(self, request, *args, **kwargs):
        context = {
            'projects': self.get_all_model_instances()
        }
        return render(request, self.template_name, context)

class BasePostDetailPage(View):
    template_name = ""
    model_name = ""

    def get_current_model_instance(self, slug_name):
        return self.model_name.objects.get(slug=slug_name)

    def get(self, request, *args, **kwargs):
        context = {
            'detail_page': True,
            'current': self.get_current_model_instance(kwargs['slug'])
        }
        return render(request, self.template_name, context)