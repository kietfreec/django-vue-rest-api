# django-vue-rest-api
Create Demo server-client with django &amp; vue

### Server

> cd server/rest_api_tasks

- Initialize/update the above task model to a sqlite database:
> python manage.py makemigrations tasks

- To add these model modifications to the sqlite database, we will need to use the command migrate:
> python manage.py migrate

- This will generate a db.sqlite3 file inside the parent **rest_api_tasks** folder. To see whether everything is working properly, start the shell using the following command:
> python manage.py shell

- Inside the shell environment, import the Task model:
>
> from tasks.models import Task
> - Instantiate the Task model:
> t = Task(title="Coding in Python",description="Building a REST API using django")
> - Save the instantiated record:
> t.save()
> - Get the saved records:
> Task.objects.all()
> - This will give you the following output:
> <QuerySet [<Task: Coding in Python>]>
> - If you got the above response, the database is working correctly, and you can exit the shell using the following command:
> exit()

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.


- Install Django REST framework before we can build up this Django REST API:
> python -m pip install djangorestframework

- Our API is now fully set! To test it, run the Django development server using the runserver command as shown below:
> python manage.py runserver


### Client

> cd client/tasks_client

- Install Axios to handle the communication between the client and Django REST server:
> npm install axios

- Now you can start the development server to test if everything is working as expected:
> npm run serve