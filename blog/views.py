from .models import Post
from main.base_classes.base_classes import BaseAllPostPage, BasePostDetailPage


class BlogPage(BaseAllPostPage):
    template_name = "blog_template/blogpage.html"
    post_model_name = Post
    intro_model_title = 'ENGLISH Lectures'


class BlogDetail(BasePostDetailPage):
    template_name = "detail_template/lecture_article.html"
    model_name = Post
