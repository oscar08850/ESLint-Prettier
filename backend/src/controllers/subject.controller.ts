//operaciones tipicas de las fotos, fichero con la parte logica del fichero index de routes
import {Request, Response} from 'express';
import Subject from '../models/Subject';

export async function getSubjects(req: Request,res: Response): Promise<Response>{
    const subjects= await Subject.find(); //find me retorna todas las fotos que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(subjects);
}

export async function getSubject(req: Request,res: Response): Promise<Response>{
    const subject = await Subject.findById(req.params.id);
    return res.json(subject);
}


/* subject
    name: string;
    students: IStudent['_id']
*/
export async function createSubject(req: Request,res: Response): Promise<Response>{

    const{name, students} = req.body;
    const newSubject = {
        name: name,
        students:students
    };
    const subject = new Subject(newSubject);
    await subject.save();
    return res.json({
        message: 'Subject  successfully saved',
        subject 
    })
}

export async function deleteSubject(req: Request,res: Response): Promise<Response>{
    const {id} = req.params;
    const subject = await Subject.findByIdAndRemove(id);
    return res.json({
        message: 'Subject Deleted',
        subject
    });

}

export async function updateSubject(req: Request,res: Response): Promise<Response>{
    const{id} = req.params;
    const{name, students} = req.body;
    console.log(req.body)
    const updatedSubject = await Subject.findByIdAndUpdate(id,{
        name,
        students
    }, {new: true}); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedSubject
    });
}

//respuesta basada en una promesa cuando primero debe hacer halgo y despues yaa devolverlo (async, tb necesita el await)