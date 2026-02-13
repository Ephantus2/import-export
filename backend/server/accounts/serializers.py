from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
    
    def create(self,validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    
    def validate(self, data):
        user = authenticate(
            username = data.get('username'),
            password = data.get('password')
        )
        
        if not user:
            raise serializers.ValidationError('invalid credentials')
        data['user'] = user
        return data