# Generated by Django 4.0.1 on 2022-04-19 15:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0023_projecttranslation_image'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='IntroductionParagraph',
            new_name='IntroductionProjectsParagraph',
        ),
        migrations.RenameModel(
            old_name='IntroductionParagraphTranslation',
            new_name='IntroductionProjectsParagraphTranslation',
        ),
        migrations.AlterModelOptions(
            name='introductionprojectsparagraphtranslation',
            options={'default_permissions': (), 'managed': True, 'verbose_name': 'introduction projects paragraph Translation'},
        ),
        migrations.AlterModelTable(
            name='introductionprojectsparagraphtranslation',
            table='main_introductionprojectsparagraph_translation',
        ),
    ]
