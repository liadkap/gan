import express from "express";
import mongoose from './src/config/mongoose';
import Routes from './src/routes';
require('dotenv').config();

const app = express();
mongoose();

Routes(app);

app.use(express.json());

app.listen(process.env.PORT || process.env.PORT);