# Movies-DB-admin-page

## Overview:

This project is an example of a Movie Dashbord admin. We can de the following: 

1. Add a Movie with validations:
..* Movie's title must be 30 characters or less !
..*	Movie's storyline must be 100 characters at least !
..*	Date validation

2. Look for all movie or search a specific one

3. We can delete a movie.

## Technically speaking:
The project has two separted parts :
* Backend buit with ExpressJs
* Frontend build with ReactJs
* No SQL DataBase with mongoose

### Backend Architecture:
![alt text](https://raw.githubusercontent.com/mohamediderrissi/Movies-DB-admin-page/main/backend_architecture.png "Backend Architecture")


## To launch the project:
1. Clone the Backend branch (it contains the build of the frontend)
2. You need to define `URI_DATABASE` as an environment variable, which represents the connection url used to connect to the database.