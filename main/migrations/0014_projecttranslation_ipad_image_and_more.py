# Generated by Django 4.0.1 on 2022-04-18 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_rename_goal_projecttranslation_goal_overview_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='projecttranslation',
            name='ipad_image',
            field=models.ImageField(default='', upload_to='ipad'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='projecttranslation',
            name='iphone_image',
            field=models.ImageField(default='', upload_to='iphone'),
            preserve_default=False,
        ),
    ]
