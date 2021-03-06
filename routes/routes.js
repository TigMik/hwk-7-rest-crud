import express from 'express'
import {
    getStudents,
    getStudent,
    createStudent,
    updateStudent,
    deleteStudent
} from '../controllers/students.js';

const router = express.Router();

router.get('/', getStudents);

router.get('/:id', getStudent);

router.put('/:id', updateStudent);

router.post('/', createStudent);

router.delete('/:id', deleteStudent);

export default router;

