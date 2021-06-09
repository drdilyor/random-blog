# random-blog
A blog website with Django, GraphQL and Vue.JS

It isn't deployed.

## Local run
### Backend
Install dependencies:
```
cd backend/
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Setup database and create a super user:
```
./manage.py migrate
./manage.py createsuperuser
```

Run development server:
```
./manage.py runserver
```

Now you can acces admin panel at http://localhost:8000/admin and Graph<i>i</i>QL Interface at http://localhost:8000/graphql

### Frontend
Install dependencies and run:
```
npm install
npm run serve
```
Now you can access frontend at http://localhost:8080
