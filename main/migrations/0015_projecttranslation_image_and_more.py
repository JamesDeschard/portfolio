# Generated by Django 4.0.1 on 2022-04-18 15:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0014_projecttranslation_ipad_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='projecttranslation',
            name='image',
            field=models.ImageField(default='', upload_to='projects/cover_image'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='ipad_image',
            field=models.ImageField(upload_to='projects/ipad'),
        ),
        migrations.AlterField(
            model_name='projecttranslation',
            name='iphone_image',
            field=models.ImageField(upload_to='projects/iphone'),
        ),
    ]