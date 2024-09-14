from django.db import models

# Create your models here.

# Model for Job
class Job(models.Model):
    STATUS_CHOICES = [
        ('applied', 'Applied'),
        ('interview', 'Interview'),
        ('offer', 'Offer'),
        ('rejection', 'Rejection'),
    ]

    companyName = models.CharField(max_length=60)
    position = models.CharField(max_length=50)
    date_applied = models.DateField()
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='applied')

    def __str__(self):
        return f"{self.companyName} - {self.position}"
    
# Model for Skill
class Skill(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

# Model for Resume
class Resume(models.Model):
    name = models.CharField(max_length=100)
    contact_info = models.TextField()
    work_experiences = models.TextField()
    skills = models.ManyToManyField(Skill, blank=True)

    def __str__(self):
        return self.name