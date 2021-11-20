import {Phone} from './Phone'

export interface Student {
    _id?: string;
    name: string;
    address: string;
    phones: Array<Phone>
}