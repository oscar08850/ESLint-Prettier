import { Injectable } from '@angular/core';
import { Subject } from '../interfaces/Subject';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  URI="http://localhost:4000/subjects"
  constructor(private http:HttpClient) { }

  getSubjects(){
    return this.http.get<Subject[]>(this.URI)
  }

  getSubject(id:string){
    return this.http.get<Subject>(this.URI+'/'+id)
  }

  updateSubject(subject:Subject){
    return this.http.put(this.URI+'/'+subject._id,subject)
  }
}
