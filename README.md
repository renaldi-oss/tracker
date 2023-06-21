# cara install tracker

## Pastikan PostgreSQL terinstall dan clone project

### Setting up frontend

pindah ke folder tracker dan jalankan pada cli :\
	`npm install`

untuk menjalankan react, jalankan perintah berikut:\
	`npm start`

### Setting up backend

untuk koneksi ke database, rubah file pada folder server dengan nama `db.js` / `db2.js`
kemudian rubah username, password, dan nama database sesuai dengan yang ada di komputer masing-masing

	const sequelize = new Sequelize({database},{username}, {password}, {
  	host: 'localhost',
  	port: 5432,
  	dialect: 'postgres',
	});
	<!-- jika ingin RawQuery -->
	const Pool = require("pg").Pool;
	const pool = new Pool({
		user: "{username}",
		password: "{password}",
		host: "localhost",
		port: 5432,
		database: "{database}"
	});

Navigate into server folder and run:\
	`npm install` OR `npm init` and step through default options

Install Express, PG and CORS:\
	`npm i express pg cors`

Install nodemon secara global untuk memudahkan development:\
	`npm install -g nodemon`

`server/index.js` mengandung kode untuk server.\

untuk menjalankan server, jalankan perintah berikut:\
	`nodemon index`

### Setting up PostgreSQL

setting up database dengan nama sesuai keinginan dan rubah nama database pada file `db.js`

buat table melalui cli

`sequelize db:migrate`


### Setting up PostgreSQL jika mau raw query

Create and set database name and password

buat table dan jalankan query berikut pada postgresql

`CREATE TABLE companies (
    id integer NOT NULL UNIQUE,
    company_name varchar(50),
    job_role varchar(50),
    date_applied date,
    app_status varchar(50)
);`

****** ****** ****** ******
star this repo if you like it :)
