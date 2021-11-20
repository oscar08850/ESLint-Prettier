"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
//el esquema es para mongoose, para la base de datos
const schema = new mongoose_1.Schema({
    name: String,
    subjects: ['_id'],
    age: Number //la imagen estara guardada en la carpeta upload, en el schema solo guardara la direccion de la imagen
});
//con <ITeacher> le pedimos que cumpla con la estructura de la interfaz en ts
exports.default = (0, mongoose_1.model)('Teacher', schema);
