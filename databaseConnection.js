const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || 3000;


const dbConfigHeroku = {
	host: "y5svr1t2r5xudqeq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	user: "rhny2imfpp4su71b",
	password: "u44h36ezqjiwha8a",
	database: "g1s9fr208tk26k8s",
	multipleStatements: false,
	reconnect: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		