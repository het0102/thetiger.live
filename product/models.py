from djongo import models
from account.models import Account


class Product(models.Model):
    id=                 models.CharField(max_length=100,primary_key=True)
    price =             models.CharField(max_length=100)
    title =             models.CharField(max_length=100)
    name =              models.CharField(max_length=100)
    desc =              models.CharField(max_length=1000)
    url =               models.CharField(max_length=1000)
    lastupdatescan =    models.CharField(max_length=1000)
    lasttracked =       models.CharField(max_length=1000)
    model =             models.CharField(max_length=100)
    location =          models.CharField(max_length=100)
    productgroup =      models.CharField(max_length=1000)
    manufacturer =      models.CharField(max_length=1000)



class PriceTrackingData(models.Model):
    track_id=          models.AutoField(primary_key=True)
    product_id=        models.ForeignKey(Product,related_name='ProductDeatils',on_delete=models.CASCADE)
    email=             models.EmailField(max_length=100, verbose_name="Email")
    price_value=       models.CharField(max_length=100, verbose_name="Type Of Price")
    price_percent=     models.CharField(max_length=100, verbose_name="Type Of Percentage")