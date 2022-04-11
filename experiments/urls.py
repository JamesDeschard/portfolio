from django.urls import path

from .views import ExperimentPage, ExperimentDetail

urlpatterns = [
    path('experiments/', ExperimentPage.as_view(), name="experimentspage"),
    path('experiments/<slug:slug>', ExperimentDetail.as_view(), name="experiment")
]