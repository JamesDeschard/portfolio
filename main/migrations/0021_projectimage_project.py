# Generated by Django 4.0.1 on 2022-04-19 12:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0020_projectimage_images_delete_projectimagetranslation'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectimage',
            name='project',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, to='main.project'),
        ),
    ]
