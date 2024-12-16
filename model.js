import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

main()
.catch(err=> console.log(err));

async function main(params) {
    await mongoose.connect(process.env.MONGO_URL)

    console.log('mongo connected ...')
}

const User = mongoose.Schema({
    name: String,
    Surname: String,
    login: String,
    password: String
})

export const UserModel = mongoose.model('users', User);