//operaciones tipicas de las fotos, fichero con la parte logica del fichero index de routes
import {Request, Response} from 'express';
import Student from '../models/Student';

export async function getStudents(req: Request,res: Response): Promise<Response>{
    const students = await Student.find(); //find me retorna todas las subjects que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(students);
}

export async function getStudent(req: Request,res: Response): Promise<Response>{
    const student = await Student.findById(req.params.id);
    return res.json(student);
}


/* 
    name: string;
    adress: string;
    phones: Array<IPhone>
*/
export async function createStudent(req: Request,res: Response): Promise<Response>{

    const{name, address, phones} = req.body;
    const newStudent = {
        name: name,
        address: address,
        phones: phones
    };
    const student = new Student(newStudent);
    await student.save();
    return res.json(student)
}

export async function deleteStudent(req: Request,res: Response): Promise<Response>{
    const {id} = req.params;
    const student = await Student.findByIdAndRemove(id);
    return res.json({
        message: 'Student Deleted',
        student
    });

}

export async function updateStudent(req: Request,res: Response): Promise<Response>{
    const{id} = req.params;
    const{name, address, phones} = req.body;
    console.log(req.body)
    const updatedStudent = await Student.findByIdAndUpdate(id,{
        name,
        address,
        phones
    }, {new: true}); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedStudent
    });
}