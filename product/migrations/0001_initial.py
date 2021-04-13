# Generated by Django 3.0.5 on 2021-03-25 12:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.CharField(max_length=100, primary_key=True, serialize=False)),
                ('price', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
                ('desc', models.CharField(max_length=1000)),
                ('url', models.CharField(max_length=1000)),
                ('lastupdatescan', models.CharField(max_length=1000)),
                ('lasttracked', models.CharField(max_length=1000)),
                ('model', models.CharField(max_length=100)),
                ('location', models.CharField(max_length=100)),
                ('productgroup', models.CharField(max_length=1000)),
                ('manufacturer', models.CharField(max_length=1000)),
            ],
        ),
        migrations.CreateModel(
            name='PriceTrackingData',
            fields=[
                ('track_id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=100, verbose_name='Email')),
                ('price_value', models.CharField(max_length=100, verbose_name='Type Of Price')),
                ('price_percent', models.CharField(max_length=100, verbose_name='Type Of Percentage')),
                ('product_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='ProductDeatils', to='product.Product')),
            ],
        ),
    ]
