# django-vue-rest-api
Create Demo server-client with django &amp; vue

## Server

```bash
cd server/rest_api_tasks
```

- Initialize/update the above task model to a sqlite database:
```bash
python manage.py makemigrations tasks
```

- To add these model modifications to the sqlite database, we will need to use the command migrate:
```bash
python manage.py migrate
```

- This will generate a db.sqlite3 file inside the parent **rest_api_tasks** folder. To see whether everything is working properly, start the shell using the following command:
```bash
python manage.py shell
```

- Inside the shell environment, import the Task model:
```bash
from tasks.models import Task
```

- Instantiate the Task model:
```bash
t = Task(title="Coding in Python",description="Building a REST API using django")
```

- Save the instantiated record:
```bash
t.save()
```

- Get the saved records:
```bash
Task.objects.all()
```

- This will give you the following output:
> <QuerySet [<Task: Coding in Python>]>
```bash
exit()
```

- Install Django REST framework before we can build up this Django REST API:
```bash
python -m pip install djangorestframework
```

- Our API is now fully set! To test it, run the Django development server using the runserver command as shown below:
```bash
python manage.py runserver
```



## Client

```bash
python manage.py runserver
```
> cd client/tasks_client

- Install Axios to handle the communication between the client and Django REST server:
```bash
npm install axios
```

- Now you can start the development server to test if everything is working as expected:
```bash
npm run serve
```
