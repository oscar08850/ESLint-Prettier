import {Schema, model, Document} from 'mongoose';

const PersonaSchema = new Schema({
    name:{ type: String, required: true },
    email:{ type: String, required: true },
    dni:{ type: String, required: true },
    telefono:{ type: String, required: true }
    
});
export interface IPersona extends Document {
    name:string;
    email:string;
    dni: string;
    telefono: string;
}

export default model<IPersona>('Persona', PersonaSchema);