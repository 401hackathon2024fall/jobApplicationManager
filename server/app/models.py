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
    name = models.CharField(max_length=100)
    contact_info = models.TextField()
    work_experiences = models.TextField()
    skills = models.ManyToManyField(Skill, blank=True)

    def __str__(self):
        return self.name