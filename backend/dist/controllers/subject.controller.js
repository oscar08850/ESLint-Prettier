"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubject = exports.deleteSubject = exports.createSubject = exports.getSubject = exports.getSubjects = void 0;
const Subject_1 = __importDefault(require("../models/Subject"));
async function getSubjects(req, res) {
    const subjects = await Subject_1.default.find(); //find me retorna todas las subjects que tengo almaacenadas (las he guaardado con el save abajo)
    return res.json(subjects);
}
exports.getSubjects = getSubjects;
async function getSubject(req, res) {
    const subject = await Subject_1.default.findById(req.params.id);
    return res.json(subject);
}
exports.getSubject = getSubject;
/*
interface ISubject extends Document {
    name: string;
    credits: number
*/
async function createSubject(req, res) {
    const { name, credits } = req.body;
    const newSubject = {
        name: name,
        credits: credits
    };
    const subject = new Subject_1.default(newSubject);
    await subject.save();
    return res.json({
        message: 'Subject successfully saved',
        subject
    });
}
exports.createSubject = createSubject;
async function deleteSubject(req, res) {
    const { id } = req.params;
    const subject = await Subject_1.default.findByIdAndRemove(id);
    return res.json({
        message: 'Subject Deleted',
        subject
    });
}
exports.deleteSubject = deleteSubject;
async function updateSubject(req, res) {
    const { id } = req.params;
    const { name, credits } = req.body;
    console.log(req.body);
    const updatedSubject = await Subject_1.default.findByIdAndUpdate(id, {
        name,
        credits
    }, { new: true }); //para que retorne el objeto modificado sino retorna el de antes de modificarlo
    return res.json({
        message: 'Succesfully Updated',
        updatedSubject
    });
}
exports.updateSubject = updateSubject;
