# Generated by Django 4.0.1 on 2022-04-19 12:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0019_rename_post_projectimagetranslation_project'),
    ]

    operations = [
        migrations.AddField(
            model_name='projectimage',
            name='image',
            field=models.FileField(default='', upload_to='images/illustrations'),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='ProjectImageTranslation',
        ),
    ]