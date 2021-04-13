from rest_framework import serializers

from ..models import Product,PriceTrackingData


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ('id','title', 'name', 'desc', 'url', 'price')


class ProductDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields =  ('id','title','name', 'desc', 'url', 'price', 'lastupdatescan', 'lasttracked', 'model', 'location', 'productgroup', 'manufacturer')


class PriceTrackingDataSerializer(serializers.ModelSerializer):
   class Meta:
        model = PriceTrackingData
        fields = ('track_id','product_id','email', 'price_value', 'price_percent')



