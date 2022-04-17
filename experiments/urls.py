from django.urls import path
from django.utils.translation import gettext_lazy as _

from .views import ExperimentPage, ExperimentDetail

urlpatterns = [
    path(_('experiments/'), ExperimentPage.as_view(), name="experimentspage"),
    path(_('experiments/<slug:slug>/'), ExperimentDetail.as_view(), name="experiment")
]