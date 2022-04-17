from django.urls import path

from .views import HomePage, AboutPage, ProjectDetails

from django.utils.translation import gettext_lazy as _

urlpatterns = [
    path('', HomePage.as_view(), name="homepage"),
    path(_('about/'), AboutPage.as_view(), name="aboutpage"),
    path(_('projects/<slug:slug>/'), ProjectDetails.as_view(), name="project"),
]