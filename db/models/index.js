const mongoose = require('mongoose');
require('dotenv').config();
const db_user = process.env.DB_USER || "";
const db_pass = process.env.DB_PASS || "";
const db_name = process.env.DB_NAME || "savedBooks";
const db_host = process.env.DB_HOST || "mongodb://localhost/savedBooks";


mongoose.connect(db_host, {
  useNewUrlParser: true,
  user: db_user,
  pass: db_pass,
  authSource: db_name,
});


module.exports = {
  savedBooks: require("./savedBooks"),
};


db.createUser({
  user: 'james',
  pwd: 'test123',
  roles: [{ role: 'readWrite', db:'savedBooks_db'}]
})