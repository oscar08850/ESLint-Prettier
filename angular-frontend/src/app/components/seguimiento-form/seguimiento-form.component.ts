import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seguimiento } from 'src/app/interfaces/Seguimiento';
import { SeguimientoService } from 'src/app/services/seguimiento.service';

@Component({
  selector: 'app-seguimiento-form',
  templateUrl: './seguimiento-form.component.html',
  styleUrls: ['./seguimiento-form.component.css']
})
export class SeguimientoFormComponent implements OnInit {
  id:string

  constructor(private activateRoute: ActivatedRoute,private seguimientoService:SeguimientoService, private router: Router) {
    this.id = '';
   }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
    })
  }

  uploadSeguimiento(fecha:HTMLInputElement,fiebre:HTMLInputElement,tos:HTMLInputElement,respirar:HTMLInputElement,malestar:HTMLInputElement){
    const seguimiento: Seguimiento = {
      _id: '',
      persona: this.id,
      fecha: fecha.value,
      fiebre: fiebre.value,
      tos: tos.value,
      dificultadRespiratoria:respirar.value,
      malestarGeneral:malestar.value
    }
    this.seguimientoService.createSeguimiento(seguimiento)
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/persona/'+this.id]);
      }, err => console.log(err))
    return false;

  }

}
