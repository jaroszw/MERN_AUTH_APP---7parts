import dotenv from "dotenv";
dotenv.config();

const config = {
  db: {
    mongoURI: process.env.CONNECTION_URI,
  },
};

export default config;
