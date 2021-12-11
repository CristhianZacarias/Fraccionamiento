var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'fraccionamiento-criss.caikpakyfz6x.us-east-2.rds.amazonaws.com',
  user     : 'cristian',
  password : 'cristian5236',
  database : 'fraccionamiento'
});

module.exports = connection;