from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200, verbose_name = 'Título')
    description = models.TextField(verbose_name = 'Descripción')
    image = models.ImageField(verbose_name = 'Imagen', upload_to="projects")
    first_name = models.CharField(max_length=20, verbose_name = 'Nombre')  
    last_name  = models.CharField(max_length=30, verbose_name = 'Apellido')  
    email = models.EmailField(max_length=50, verbose_name = 'Correo Electrónico')  
    text_field = models.TextField(max_length=400, verbose_name = 'Texto')  
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'proyecto'
        verbose_name_plural = 'proyectos'
        ordering=['-created']