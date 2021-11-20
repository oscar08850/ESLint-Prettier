import {Schema, model, Document} from 'mongoose';
import Persona, {IPersona} from './Persona';

const SeguimientoSchema = new Schema({
    persona: {
        type: Schema.Types.ObjectId,
        ref: Persona
    },
    fecha:{ type: String, required: true },
    fiebre:{ type: String, required: true },
    tos:{ type: String, required: true },
    dificultadRespiratoria:{ type: String, required: true },
    malestarGeneral:{ type: String, required: true }
});

export interface ISeguimiento extends Document {
    persona:IPersona['_id'];
    fecha:string;
    fiebre:string;
    tos:string;
    dificultadRespiratoria:string;
    malestarGeneral:string;    
}

export default model<ISeguimiento>('Seguimiento', SeguimientoSchema);