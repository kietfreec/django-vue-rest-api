from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    # for tasks
    path('api/', include('tasks.urls')),
    # for admin side
    path('admin/', admin.site.urls),
]