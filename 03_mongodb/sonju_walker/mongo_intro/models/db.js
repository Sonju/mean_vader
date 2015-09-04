
// we're going to ue an ORM called Mongoose
  var mongoose = require('mongoose');

// define my connection string!
  // EXAMPLES of other connections
  // protocol://username:password@website.com:3000/resource-name
  // website: https://root@google.com/search
  // ftp://admin:awesomepassword@ftp.somewebsite.com/path/to/www

// 1st mongodb://server-name.com:part/name-of-database
  var connectionString = 'mongodb://localhost/myfirstdatabase';

// 2nd now tell mongoose to connect to our database using connectionString
  mongoose.connect(connectionString);

// 3rd listen for events in mongoose
  // 'connected' event - database has connected
  // 'error' event - something has gone wrong!
  // 'disconnected' - ' database has been disconnected'

  mongoose.connection.on('connected', function() {
    console.log('Mongoose has connected to: ' + connectionString);
  });

  mongoose.connection.on('error', function(error) {
    console.log('Mongoose has had an error: ' + connectionString);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose has been disconnected: ' + connectionString);
  });
