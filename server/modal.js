// require in Pool from postgres
const { Pool } = require('pg');
const { AsyncDependenciesBlock } = require('webpack');
// create a PG URI to store the key to our database on Elephant SQL
const PG_URI = 'postgres://vwlncuin:ngyUEuKi-_h5-XwUN8SRUDsM-Xt5QR-M@heffalump.db.elephantsql.com/vwlncuin';
// create a new pool to connect our server to our database
const pool = new Pool({
  connectionString: PG_URI,
})


// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};