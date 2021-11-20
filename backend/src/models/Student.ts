import { Schema, model, Document } from "mongoose";
import Phone, {IPhone} from "./Phone";

//el esquema es para mongoose, para la base de datos
const schema = new Schema({
    name: String,
    address: String,
    phones: [{
        type: Object,
        ref: Phone
    }]
})

//la interfaz es una descripcion del objeto para que ts sepa como es el schema (el document describe una estructura tipicaa de mongodb)
export interface IStudent extends Document {
    name: string;
    adress: string;
    phones: Array<IPhone>
}

export default model<IStudent>('Student', schema);