# Generated by Django 2.1.2 on 2019-10-15 06:27

import common.models
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('kubeops_api', '0029_auto_20191011_0825'),
    ]

    operations = [
        migrations.CreateModel(
            name='ClusterHealthHistory',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('project_id', models.CharField(max_length=255)),
                ('available_rate', models.IntegerField(default=0)),
                ('date_type', models.CharField(choices=[('HOUR', 'HOUR'), ('DAY', 'DAY')], default='HOUR', max_length=255)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        )
    ]