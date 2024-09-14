from django.db import models

# Create your models here.

# Model for Job
class Job(models.Model):

    position = models.CharField(max_length=50)
    company = models.CharField(max_length=60)
    status = models.CharField(max_length=10, default='applied')
    date = models.DateField()

    def __str__(self):
        return f"{self.companyName} - {self.position}"
    
# Model for Skill
class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

# Model for Resume
class Resume(models.Model):
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    contact = models.IntegerField(max_length=10)
    postion = models.CharField()
    employer = models.CharField()
    city = models.CharField()
    startDate = models.DateField()
    endDate = models.DateField()
    description = models.TextField()


    def __str__(self):
        return self.name