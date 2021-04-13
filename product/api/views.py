from rest_framework import permissions
from rest_framework.generics import ListAPIView
from ..models import Product,PriceTrackingData
from .serializers import ProductSerializer,ProductDetailsSerializer,PriceTrackingDataSerializer
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.response import Response
from rest_framework import status
from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view


class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (permissions.AllowAny,)
    #pagination_class = PageNumberPagination    
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ('^name',)


class ProductDetailsView(ListAPIView):
    serializer_class = ProductDetailsSerializer
    permission_classes = (permissions.AllowAny,)   
    
    def get_queryset(self):
        queryset = Product.objects.filter(id=self.kwargs['id'])
        return queryset


class PriceTrackingDataAPIView(ListAPIView):
    queryset =PriceTrackingData.objects.all()
    serializer_class=PriceTrackingDataSerializer
    permission_classes=(permissions.AllowAny,)

    def post(self,request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        pricetracking = serializer.save()
        pricetracking_data = serializer.data
        X = PriceTrackingData.objects.get(email=pricetracking_data['email'],price_value=pricetracking_data['price_value'],price_percent=pricetracking_data['price_percent'])
        title=X.product_id.title
        price=X.product_id.price
        name=X.product_id.name
        desc=X.product_id.desc
        model=X.product_id.model
        location=X.product_id.location
        Track_email(title,price,name,desc,location,model,X.email, X.price_value, X.price_percent)
        return Response({
            "pricetracking": PriceTrackingDataSerializer(pricetracking, context=self.get_serializer_context()).data,
        })




def Track_email(title,price,name,desc,location,model,email, price_value, price_percent):
    email_send=EmailMessage(
        desc,
        """XXXXXXXXXXX"""+name+"""XXXXXX"""+location+"""XXXXXXXXXXXXXX"""+price_percent+"""XXXXXXXXXXXXX"""+price+"""XXXXXXXXX""",
        settings.EMAIL_HOST_USER,
        [email,]
    )
    email_send.fail_silently=False
    email_send.send()