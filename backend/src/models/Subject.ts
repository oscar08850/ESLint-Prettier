import { Schema, model, Document } from "mongoose";
import Student, {IStudent} from './Student'


//el esquema es para mongoose, para la base de datos
const schema = new Schema({
    name: String,
    students: [{
        type: Schema.Types.ObjectId,
        ref: Student
    }]
})

//la interfaz es una descripcion del objeto para que ts sepa como es el schema (el document describe una estructura tipicaa de mongodb)
export interface ISubject extends Document {
    name: string;
    students: IStudent['_id']
}


export default model<ISubject>('Subject', schema);