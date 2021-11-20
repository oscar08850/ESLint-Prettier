import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/Persona';
import { Seguimiento } from 'src/app/interfaces/Seguimiento';
import { PersonaService } from 'src/app/services/persona.service';
import { SeguimientoService } from 'src/app/services/seguimiento.service';

@Component({
  selector: 'app-persona-update',
  templateUrl: './persona-update.component.html',
  styleUrls: ['./persona-update.component.css']
})
export class PersonaUpdateComponent implements OnInit {

  id:string;
  persona: Persona;
  seguimientos: Seguimiento[];

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private personaService: PersonaService, private seguimientosService: SeguimientoService) { 
      this.id='';
      this.persona=<Persona>{};
      this.seguimientos= new Array<Seguimiento>();
    }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.personaService.getPersona(this.id).subscribe(
        res=> {
          this.persona=res;
          console.log(res)},
        err => console.log (err)
      )
      this.seguimientosService.getSeguimientos().subscribe(
        res=> {
          this.seguimientos=res;
          console.log(res)},
        err => console.log (err)
      )
    })
    for (var i=0; i<this.seguimientos.length;i++)
    {
      if (this.id.localeCompare( this.seguimientos[i].persona )==0){
        this.seguimientos.splice(i, 1);
        console.log(this.seguimientos[i]);
      }
    }
  }

  updatePersona(name:HTMLInputElement, email:HTMLInputElement, dni:HTMLInputElement, telefono:HTMLInputElement): boolean{
    let persona= {
      '_id': this.id,
      'name':name.value,
      'email':email.value,
      'dni': dni.value,
      'telefono': telefono.value,
    }
    this.personaService.updatePersona(this.id, persona).subscribe(
      res =>{ console.log(res);
      this.router.navigate(['/persona'])},
      err => console.log(err),
    );
    return false;
  }

  addSeguimiento(id: string){
    this.router.navigate(['/seguimiento/',id]);
  }

}
