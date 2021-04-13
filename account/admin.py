from django.contrib import admin
from .models import Account


class AccountAdmin(admin.ModelAdmin):
    list_display = ('email', 'name', 'last_login', 'is_active', 'is_staff')
    search_fields = ('email', 'number', 'name')
    readonly_fields = ('id', 'email', 'name', 'date_joined', 'last_login', 'is_active', 'is_staff','password')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(Account, AccountAdmin)
