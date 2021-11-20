"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)(); //crea con express un enrutador --> es un objeto para poner dentro tus rutas o las url del servidor
const teacher_controller_1 = require("../controllers/teacher.controller");
const subject_controller_1 = require("../controllers/subject.controller");
router.route('/teachers')
    .get(teacher_controller_1.getTeachers)
    .post(teacher_controller_1.createTeacher);
router.route('/teachers/:id')
    .get(teacher_controller_1.getTeacher)
    .delete(teacher_controller_1.deleteTeacher)
    .put(teacher_controller_1.updateTeacher);
router.route('/subjects')
    .get(subject_controller_1.getSubjects)
    .post(subject_controller_1.createSubject);
router.route('/subjects/:id')
    .get(subject_controller_1.getSubject)
    .delete(subject_controller_1.deleteSubject)
    .put(subject_controller_1.updateSubject);
exports.default = router;
