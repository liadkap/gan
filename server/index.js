import express from "express";
import mongoose from './src/config/mongoose';
import Routes from './src/routes';
import middleware from "./src/config/middleware";
require('dotenv').config();


const app = express();
mongoose();
middleware(app);

Routes(app);

app.listen(process.env.PORT || '5000');