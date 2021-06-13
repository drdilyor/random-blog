import os
import re

DEBUG = False

db_url = os.environ['DATABASE_URL']
match = re.match(r'.+?://(\w+):(\w+)@(.+?):(\d+)/(.*)', db_url)
assert match, 'DATABASE_URL misconfigured'

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'USER': match[1],
        'PASSWORD': match[2],
        'HOST': match[3],
        'PORT': match[4],
        'NAME': match[5],
    }
}
