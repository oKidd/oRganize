from django.contrib import admin
from schedule.models import Icon

# Register your models here.
class IconAdmin(admin.ModelAdmin):
    list_display = ['name']

admin.site.register(Icon, IconAdmin)