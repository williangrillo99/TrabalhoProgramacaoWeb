import {Document, model, Schema} from "mongoose";

// Defino a interface do usuário
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const schema = new Schema({
    name: String,
    email: String,
    password: String
});

export const users = model<IUser>("users", schema);