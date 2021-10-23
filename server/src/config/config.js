const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  db: {
    mongoURI: process.env.CONNECTION_URI,
  },
  JwtSecret: process.env.JWT_SECRET,
};
