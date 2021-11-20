import { Request,Response } from 'express';
import mongoose from 'mongoose';
import Persona from '../models/Persona';

export async function getPersonas(req: Request, res:Response): Promise<Response> { 
    try {
        const persona = await Persona.find();  
        return res.status(200).json(persona);
        
    } catch (error:any) {                                                  

        return res.status(404).json({message: error.message});
    }
}

export async function getPersona(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No post with id: ${id}`);
    }
    else{
        const persona = await Persona.findById(id);
        return res.status(200).json(persona);
    }    
}

export async function createPersona(req: Request, res:Response): Promise<Response> { 
    const {name, email, dni, telefono} = req.body;

    const newPersona = {
        name: name,
        email: email,
        dni: dni,
        telefono: telefono
    };

    const persona = new Persona(newPersona);
    try{
        await persona.save();
        return res.status(200).json({
            message: 'persona successfully saved',
            persona
        })
    } catch (error:any) {
    return res.status(409).json({ message: error.message });
    }
};

export async function deletePersona(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No persona with id: ${id}`);
    }
    else{
        const persona = await Persona.findByIdAndRemove(id);
        
        return res.json({
            message: 'persona Deleted',
            persona
        });
    }
}

export async function updatePersona(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    const {name, email, dni, telefono} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No persona with id: ${id}`);
    }
    else{
        const updatedPersona = await Persona.findByIdAndUpdate(id,{
            name: name,
            email: email,
            dni: dni,
            telefono: telefono
        }, {new:true});
        return res.json({
            message: 'Persona successfully updated',
            updatedPersona
        });
    }    
}