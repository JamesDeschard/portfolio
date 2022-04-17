# Generated by Django 4.0.1 on 2022-04-16 13:35

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion
import parler.fields
import parler.models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_remove_project_date_remove_project_duration_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='SendEmail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'abstract': False,
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='date',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='duration',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='goal',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='outcomes',
            field=models.JSONField(default=list),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='overview',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='role',
            field=models.JSONField(default=list),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='slug',
            field=models.SlugField(max_length=128),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='sub_title',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='title',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='when',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='where',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='who',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='why',
            field=ckeditor.fields.RichTextField(),
        ),
        migrations.CreateModel(
            name='SendEmailTranslation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('title', models.CharField(max_length=128)),
                ('overview', ckeditor.fields.RichTextField()),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='main.sendemail')),
            ],
            options={
                'verbose_name': 'send email Translation',
                'db_table': 'main_sendemail_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
    ]
