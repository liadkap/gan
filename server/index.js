import express from "express";
import mongoose from './src/config/mongoose';
import Routes from './src/routes';
require('dotenv').config();
import cors from 'cors'

const app = express();
mongoose();
app.use(express.json());
app.use(cors());

Routes(app);

app.listen(process.env.PORT || '5000');