var pg = require('pg');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/db', function (request, response) {
	pg.connect(process.env.DATABASE_URL, function(err, client, done) {
	  client.query('SELECT * FROM test_table', function(err, result) {
		done();
		if (err)
		 { console.error(err); response.send("Error " + err); }
		else
		 { response.render('pages/db', {results: result.rows} ); }
	  });
	});
});

app.listen(process.env.PORT, function(){
	console.log("App runnning ...");
});