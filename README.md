# lynx-dotenv
Dotenv support for the lynx framework.

Load into a `ConfigBuilder` some parameters, such as the database connection, mailer settings, secrets, uploads.
Please refer to the following .env example for the supported variables.
## .env example

```
# .env
DB_TYPE=mysql
DB_NAME=cms
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_PORT=8889

SESSION_SECRET=cms-test

UPLOAD_PATH=../
CACHE_PATH=../
ENABLE_IMAGE_CACHE=true

DEFAULT_LANGUAGE=it

MAILER_SENDER=noreply@example.it
MAILER_USER=username
MAILER_PASSWORD=password
MAILER_HOST=localhost
MAILER_PORT=123
MAILER_SECURE=true

```
