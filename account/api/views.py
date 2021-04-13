from rest_framework import generics, permissions
from rest_framework.response import Response
from django.conf import settings
from django.core.mail import EmailMessage

from knox.models import AuthToken
from ..models import Account
from account.api.serializers import UserSerializer, RegisterSerializer, LoginSerializer


class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    queryset = Account.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user



class RegisterAPIView(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        user_data = serializer.data
        X = Account.objects.get(email=user_data['email'], name=user_data['name'])
        print(X.name, X.email)
        send_email(X.name, X.email)
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


def send_email(name, email):
    email_send = EmailMessage(
        name,
        "Hi "+name+","
        """
        Thank you for signing up at thetiger.live and welcome to our community.This website provides a free service and, as such, we provide no warranty or guarantee of service or uptime.By Using this site, you acknowledge that you have read and agreed to terms and do so at your own risk.Thank you for using www.thetiger.live.
        """,
        settings.EMAIL_HOST_USER,
        [email]
    )
    email_send.fail_silently = False
    email_send.send()