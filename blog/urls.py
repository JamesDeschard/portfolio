from django.urls import path

from .views import BlogDetail, BlogPage

from django.utils.translation import gettext_lazy as _

urlpatterns = [
    path(_('lectures/'), BlogPage.as_view(), name="lectures"),
    path(_('lectures/<slug:slug>/'), BlogDetail.as_view(), name="post")
]