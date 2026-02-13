from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import LoginSerializer, RegisterSerializer
from django.contrib.auth import login
# Create your views here.

class RegisterView(APIView):
    def post(self, request):
        serializers = RegisterSerializer(data=request.data)
        
        if serializers.is_valid():
            serializers.save()
            return Response({"message": "user created successfully"})
        return Response(serializers.errors)

class LoginView(APIView):
    def post(self, request):
        serializers = LoginSerializer(data=request.data)
        
        if serializers.is_valid():
            user = serializers.validated_data['user']
            login(request, user)
            
            return Response({'message': 'login successful'})
        return Response(serializers.errors)
            