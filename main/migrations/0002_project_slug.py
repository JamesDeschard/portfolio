# Generated by Django 4.0.1 on 2022-03-29 12:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='slug',
            field=models.SlugField(default='title-0', max_length=128),
            preserve_default=False,
        ),
    ]
