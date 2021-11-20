import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../interfaces/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  URI="http://localhost:4000/persona"
  constructor(private http:HttpClient) {}

  getStudents(){
    return this.http.get<Persona[]>(this.URI)
  }
  updatePersona(id:string, persona:any){
    return this.http.put(this.URI+'/'+id,persona)
  }
  getPersona(id:string){
    return this.http.get<Persona>(this.URI+'/'+id)
  }

}
