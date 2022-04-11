from django import template

register = template.Library()

counter = 0
@register.filter
def update_variable(value):
    counter += 1
    return str(counter + int(value))