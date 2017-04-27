# Homework

This is a small sample Angular application - currently running the 4.x version of Angular - generated with Angular CLI, and then with a little bit of scaffolding applied.

This development project is intended to build out a front end application for a Ruby on Rails based API backend, and
as such, we'd like to see work along those lines.  The angular frontend will need to delegate validation where possible 
to the API, as the API will ultimately be responsible for storing data.

This application stack mimics the backend by having a few JSON responses stored in the user.service.ts.  Presently it mimics the 
JSON response for a list of users, as well as the response for displaying a single user.

We'd like to see you add a form for creating a new user.  That user will have three fields that are required: Email, First Name and Last Name.

If you look at the user.service there is a json response for submitting a blank form, and we'd like you to build a user form that, when submitted, parses that response and adds the errors listed in that response to the form displayed for the user.

We've additionaly left the testing scaffolds in place, and would like to see some tests written and added to those scaffolds.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

