import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import "./model.js";
import { UserModel } from './model.js';

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/signup', async(req, res) =>{
    const login = req.body.login;
    const query = { login: login };
    const user = await UserModel.find(query);

    if (user.length === 0) {
        const newUser = new UserModel(req.body);
        await newUser.save();
    } else {
        res.send("Username already exist")
    }


    res.send("User created successfuly")
})

app.listen(process.env.PORT, () => {
    console.log("Server started ...");
});
