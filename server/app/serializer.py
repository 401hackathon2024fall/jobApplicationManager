from rest_framework import serializers
from .models import * 


class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'companyName', 'position', 'date_applied', 'status']


class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = ['id', 'name', 'contact_info', 'work_experiences', 'skills']

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name']