import {Student} from './Student';

export interface Subject{
    _id?: string;
    name: string;
    students: Student['_id']
}