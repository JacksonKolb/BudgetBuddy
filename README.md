A personal finance app in progress.

So far I have 1 docker container for front end, which is going to eventually be a react web app. It should eventually communicate with the webserver (backend container).

And I have 1 container for the backend, just fastapi-django-python, with one /health endpoint. 

They can both be brought up with the `docker-compose up -d`.
