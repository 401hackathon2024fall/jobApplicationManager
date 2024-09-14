from rest_framework import serializers
from .models import * 


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'position', 'company', 'status', 'date']


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ['firstName',
                'lastName', 
                'email',
                'contact', 
                'postion',
                'employer', 
                'city' ,
                'startDate',
                'endDate',
                'description' ]

