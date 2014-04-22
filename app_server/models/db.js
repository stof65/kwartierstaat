var mongoose = require( 'mongoose' );
var gracefulShutdown;
//var dbURI = 'mongodb://mongousr:mongopwd@ds035368.mongolab.com:35368/kwartierstaatdb';
var dbURI = 'mongodb://localhost/kwartierstaatdb';
mongoose.connect(dbURI);

var readLine = require ("readline");
if (process.platform === "win32"){
	var rl = readLine.createInterface ({
		input: process.stdin,
		output: process.stdout
	});
	rl.on ("SIGINT", function (){
		process.emit ("SIGINT");
	});
	rl.on ("SIGUSR2", function (){ // if NODEMON is used
		process.emit ("SIGUSR2");
	});
	rl.on ("SIGTERM", function (){ // if deployed to HEROKU
		process.emit ("SIGTERM");
	});	
}

mongoose.connection.on('connected', function () { 
	console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
	console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('Mongoose disconnected');
});

gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

process.once('SIGUSR2', function () {
	gracefulShutdown('nodemon restart', function () {
	process.kill(process.pid, 'SIGUSR2');
	});
});

process.on('SIGINT', function () {
	gracefulShutdown('app termination', function () {
	process.exit(0);
	});
});

process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function () {
	process.exit(0);
	});
});


require('./kwartieren');