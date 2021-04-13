from django.urls import path

from .views import ProductListView,ProductDetailsView,PriceTrackingDataAPIView

urlpatterns = [
    path('', ProductListView.as_view(), name="Product"),
    path('PriceTrackingData',PriceTrackingDataAPIView.as_view(),name="PriceTrackingData"),
    path('id=<int:id>',ProductDetailsView.as_view(),name="Product Details"),
]

