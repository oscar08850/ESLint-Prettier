"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTeacher = exports.deleteTeacher = exports.createTeacher = exports.getTeacher = exports.getTeachers = void 0;
const Teacher_1 = __importDefault(require("../models/Teacher"));
async function getTeachers(req, res) {
    const teachers = await Teacher_1.default.find(); //find me retorna todas las fotos que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(teachers);
}
exports.getTeachers = getTeachers;
async function getTeacher(req, res) {
    const teacher = await Teacher_1.default.findById(req.params.id);
    return res.json(teacher);
}
exports.getTeacher = getTeacher;
/* TEACHER
    name: string;
    subjects: ISubject['_id'];
    age: number
*/
async function createTeacher(req, res) {
    const { name, subjects, age } = req.body;
    const newTeacher = {
        name: name,
        subjects: subjects,
        age: age
    };
    const teacher = new Teacher_1.default(newTeacher);
    await teacher.save();
    return res.json({
        message: 'Teacher successfully saved',
        teacher
    });
}
exports.createTeacher = createTeacher;
async function deleteTeacher(req, res) {
    const { id } = req.params;
    const teacher = await Teacher_1.default.findByIdAndRemove(id);
    return res.json({
        message: 'Teacher Deleted',
        teacher
    });
}
exports.deleteTeacher = deleteTeacher;
async function updateTeacher(req, res) {
    const { id } = req.params;
    const { name, subjects, age } = req.body;
    console.log(req.body);
    const updatedTeacher = await Teacher_1.default.findByIdAndUpdate(id, {
        name,
        subjects,
        age
    }, { new: true }); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedTeacher
    });
}
exports.updateTeacher = updateTeacher;
//respuesta basada en una promesa cuando primero debe hacer halgo y despues yaa devolverlo (async, tb necesita el await)
