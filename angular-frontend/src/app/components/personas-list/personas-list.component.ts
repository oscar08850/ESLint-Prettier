import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/interfaces/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personas:Array<Persona>;

  constructor(private personaService:PersonaService, private router:Router) { 
    this.personas = new Array<Persona>();
  }

  ngOnInit(): void {
    this.personaService.getStudents().subscribe(
      res=>{
        console.log(res)
        this.personas=res
      },
      err=>console.log(err)
    )
  }

  upload(id:string){
    this.router.navigate(['/persona/'+id])
  }

}
