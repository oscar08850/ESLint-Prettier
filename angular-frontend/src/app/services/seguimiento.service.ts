import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Seguimiento } from '../interfaces/Seguimiento';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoService {

  URI="http://localhost:4000/seguimiento"
  constructor(private http:HttpClient) {}

  getSeguimientos(){
    return this.http.get<Seguimiento[]>(this.URI)
  }
  createSeguimiento(seguimiento:Seguimiento){
    return this.http.post<Seguimiento>(this.URI,seguimiento)
  }
  getSeguimiento(id:string){
    return this.http.get<Seguimiento>(this.URI+'/'+id)
  }

}
