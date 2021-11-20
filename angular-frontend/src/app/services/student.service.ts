import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Student} from '../interfaces/Student' 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  URI="http://localhost:4000/students"
  constructor(private http:HttpClient) {}

  getStudents(){
    return this.http.get<Student[]>(this.URI)
  }
  createStudent(student:Student){
    return this.http.post<Student>(this.URI,student)
  }
  getStudent(id:string){
    return this.http.get<Student>(this.URI+'/'+id)
  }

}
