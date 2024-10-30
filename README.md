# django-vue-rest-api
Create Demo server-client with django &amp; vue

## Server

```zsh
cd server/rest_api_tasks
```

- Initialize/update the above task model to a sqlite database:
```zsh
python manage.py makemigrations tasks
```

- To add these model modifications to the sqlite database, we will need to use the command migrate:
```zsh
python manage.py migrate
```

- This will generate a db.sqlite3 file inside the parent ```rest_api_tasks``` folder. To see whether everything is working properly, start the shell using the following command:
```zsh
python manage.py shell
```

- Inside the shell environment, import the Task model:
```zsh
from tasks.models import Task
```

- Instantiate the Task model:
```zsh
t = Task(title="Coding in Python",description="Building a REST API using django")
```

- Save the instantiated record:
```zsh
t.save()
```

- Get the saved records:
```zsh
Task.objects.all()
```

- This will give you the following output:
> <QuerySet [<Task: Coding in Python>]>

- If you got the above response, the database is working correctly, and you can exit the shell using the following command:
```zsh
exit()
```

- Install Django REST framework before we can build up this Django REST API:
```zsh
python -m pip install djangorestframework
```

- Our API is now fully set! To test it, run the Django development server using the runserver command as shown below:
```zsh
python manage.py runserver
```


## Client

```zsh
cd client/tasks_client
```

- Install Axios to handle the communication between the client and Django REST server:
```zsh
npm install axios
```

- Now you can start the development server to test if everything is working as expected:
```zsh
npm run serve
```
