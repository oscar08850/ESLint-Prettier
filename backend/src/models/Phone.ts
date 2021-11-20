import { Schema, model, Document } from "mongoose";

//el esquema es para mongoose, para la base de datos
const schema = new Schema({
    name: String,
    phone: String,
})

//la interfaz es una descripcion del objeto para que ts sepa como es el schema (el document describe una estructura tipicaa de mongodb)
export interface IPhone extends Document {
    name: string;
    phone: string;
}

export default model<IPhone>('Phone', schema);