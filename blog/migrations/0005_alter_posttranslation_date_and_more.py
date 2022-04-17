# Generated by Django 4.0.1 on 2022-04-16 14:02

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_remove_post_date_remove_post_length_remove_post_slug_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posttranslation',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='posttranslation',
            name='length',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='posttranslation',
            name='slug',
            field=models.SlugField(max_length=128),
        ),
        migrations.AlterField(
            model_name='posttranslation',
            name='tags',
            field=models.JSONField(default=list),
        ),
        migrations.AlterField(
            model_name='posttranslation',
            name='text',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='posttranslation',
            name='title',
            field=models.CharField(max_length=128),
        ),
    ]
