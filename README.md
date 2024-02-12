# CRUD API


## Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 20+


## Getting started
- Clone the repository
```
git clone https://github.com/Illia-Sakharau/crud-api.git
```
- Install dependencies
```
cd crud-api
npm install
```


## Environment vars
This project uses the following environment variables:

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|PORT           | Specify if you want to change the port            | 8080      |


## Run aplication
- Development mode
```
npm run start:dev
```
- Production mode
```
npm run start:prod
```

## API Document endpoints

| Action                     | URL     | Method                | Body                            |
| ------------------------ | ------------ | --------------------------| ----------------------------|
|Get all users           | api/users       | GET      | -      |
|Get user by ID           | api/users/{userId}       | GET      | -      |
|Create user           | api/users/{userId}      | POST      | see after table      |
|Update user          | api/users/{userId}       | PUT      | see after table      |
|Delete user          | api/users/{userId}       | DELETE      | -     |

##### Body for Create and Update user
- `username`: string - **required**;
- `age`: number - **required**;
- `hobbies`: string[] - **required**;
  
Examle valid body:
```
{
  "username": "Ivan",
  "age": 30,
  "hobbies": []
}
```
