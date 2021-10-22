const express = reqire("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = requrie("cores");

const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());

module.exports = app;
