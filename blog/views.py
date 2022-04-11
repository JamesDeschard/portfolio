from .models import Post
from main.base_classes.base_classes import BaseAllPostPage, BasePostDetailPage


class BlogPage(BaseAllPostPage):
    template_name = "blog_template/blogpage.html"
    model_name = Post


class BlogDetail(BasePostDetailPage):
    template_name = "detail_template/lecture_article.html"
    model_name = Post
