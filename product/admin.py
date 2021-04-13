from django.contrib import admin
from .models import Product,PriceTrackingData


class ProductAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'title', 'name', 'model', 'price',)
    search_fields = ('name','productgroup')
    readonly_fields = (
        'id','title', 'name', 'url', 'price', 'model', 'location', 'lastupdatescan', 'lasttracked', 'manufacturer','productgroup','desc'
        )

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Product, ProductAdmin)



class PriceTrackingDataAdmin(admin.ModelAdmin):
    list_display = ('track_id','product_id','email','price_value','price_percent')
    search_fields = ('product_id','email')
    readonly_fields = ('track_id','email','price_value','price_percent')

admin.site.register(PriceTrackingData,PriceTrackingDataAdmin)