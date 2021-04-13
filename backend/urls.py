from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('account.api.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('product/api/', include('product.api.urls')),
]
