from django.urls import path

from .views import BlogDetail, BlogPage

urlpatterns = [
    path('lectures/', BlogPage.as_view(), name="lectures"),
    path('lectures/<slug:slug>', BlogDetail.as_view(), name="post")
]