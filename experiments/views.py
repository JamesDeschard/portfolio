from .models import Experiment
from main.base_classes.base_classes import BaseAllPostPage, BasePostDetailPage


class ExperimentPage(BaseAllPostPage):
    template_name = "experiments_template/experimentpage.html"
    post_model_name = Experiment
    intro_model_title = 'ENGLISH Experiments'


class ExperimentDetail(BasePostDetailPage):
    template_name = "experiment_detail_template/experimentdetail.html"
    model_name = Experiment