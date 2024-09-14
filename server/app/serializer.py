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
                'position',
                'employer', 
                'city' ,
                'startDate',
                'endDate',
                'description' ]

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name']