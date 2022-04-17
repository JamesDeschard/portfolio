import email
from django import forms
from captcha.fields import CaptchaField
from django.utils.translation import gettext_lazy as _


class EmailForm(forms.Form):
    email = forms.EmailField(widget=forms.TextInput(attrs={'placeholder': _('Email adress...')}))
    captcha = CaptchaField()