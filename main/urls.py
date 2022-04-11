from django.urls import path

from .views import HomePage, AboutPage, ProjectDetails

urlpatterns = [
    path('', HomePage.as_view(), name="homepage"),
    path('about/', AboutPage.as_view(), name="aboutpage"),
    path('projects/<slug:slug>/', ProjectDetails.as_view(), name="project"),
]