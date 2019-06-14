# Restaurant API 
Back end API for [Restaurant App](https://github.com/gilvent/restaurant-app-frontend)

## How to Run
1. Clone the repository
2. Navigate to the project and install packages: `npm install`
3. Create `.env` file with based on the example provided in `.env.example`
4. Modify the port and front end app url in `.env`
```
PORT=5000
FRONT_END_URL=http://localhost:3000
```
5. Create a Postgres database and modify the following variable in `.env`
```
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_HOST=
```
6. The project uses Sequelize ORM to migrate tables and seed data. Setup database tables:
    * Migrate tables using command `npx sequelize-cli db:migrate`
    * Seed schedule and weekdays data using command `npx sequelize-cli db:seed:all`
7. The project uses Mailgun for mailing service. Please use my mailgun sandbox domain as specified in `.env`
```
MAILGUN_API_KEY=key-9d60121c4f499117bc330a9ad4d1792c
MAILGUN_DOMAIN=sandboxba6876d265a34f008efa9cb38be66e62.mailgun.org
```
8. For the mailgun sandbox domain, the recipient email has to be authorized. Please let me know which email that will be used, so I can send the invitation.
10. Run the api with command `node app.js`

## Used Libraries

### Framework
* Express JS

### ORM 
* sequelize

### Authentication 
* bcrypt : Hashing algorithm
* jsonwebtoken : JWT authentication

### Request Validator
* express-validator

### Mailing
* nodemailer
* nodemailer-mailgun-transport

