from django.db import models

# Create your models here.

# Model for Job
class Job(models.Model):
    # STATUS_CHOICES = [
    #     ('applied', 'Applied'),
    #     ('interview', 'Interview'),
    #     ('offer', 'Offer'),
    #     ('rejection', 'Rejection'),
    # ]

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
    firstName = models.CharField(max_length=100, null=True, blank=True)
    lastName = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=100, default='abc@gmail.com', null=True, blank=True)
    contact = models.CharField(max_length=15, default='0', null=True, blank=True)
    position = models.CharField(max_length=100, null=True, blank=True)
    employer = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=100, default='ABC', null=True, blank=True)
    startDate = models.DateField(null=True, blank=True)
    endDate = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name