import { Request,Response } from 'express';
import mongoose from 'mongoose';
import Seguimiento from '../models/Seguimiento';

export async function getSeguimientos(req: Request, res:Response): Promise<Response> { 
    try {
        const seguimientos = await Seguimiento.find();  
        return res.status(200).json(seguimientos);
        
    } catch (error:any) {                                                  

        return res.status(404).json({message: error.message});
    }
}

export async function getSeguimiento(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No post with id: ${id}`);
    }
    else{
        const seguimiento = await Seguimiento.findById(id);
        return res.status(200).json(seguimiento);
    }    
}

export async function createSeguimiento(req: Request, res:Response): Promise<Response> { 
    const {persona, fecha, fiebre, tos, dificultadRespiratoria, malestarGeneral} = req.body;

    const newSeguimiento= {
        persona: persona,
        fecha: fecha,
        fiebre: fiebre,
        tos: tos,
        dificultadRespiratoria:dificultadRespiratoria,
        malestarGeneral:malestarGeneral
    };

    const seguimiento = new Seguimiento(newSeguimiento);
    try{
        await seguimiento.save();
        return res.status(200).json({
            message: 'seguimiento successfully saved',
            seguimiento
        })
    } catch (error:any) {
    return res.status(409).json({ message: error.message });
    }
};

export async function deleteSeguimiento(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No seguimiento with id: ${id}`);
    }
    else{
        const seguimiento = await Seguimiento.findByIdAndRemove(id);
        
        return res.json({
            message: 'seguimiento Deleted',
            seguimiento
        });
    }
}

export async function updateSeguimiento(req: Request, res:Response): Promise<Response> { 
    const {id} = req.params;
    const {persona, fecha, fiebre, tos, dificultadRespiratoria, malestarGeneral} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).send(`No seguimiento with id: ${id}`);
    }
    else{
        const updatedSeguimiento= await Seguimiento.findByIdAndUpdate(id,{
            persona: persona,
            fecha: fecha,
            fiebre: fiebre,
            tos: tos,
            dificultadRespiratoria:dificultadRespiratoria,
            malestarGeneral:malestarGeneral
        }, {new:true});
        return res.json({
            message: 'seguimiento successfully updated',
            updatedSeguimiento
        });
    }    
}