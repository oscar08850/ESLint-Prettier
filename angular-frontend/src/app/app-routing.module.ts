import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaUpdateComponent } from './components/persona-update/persona-update.component';

import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { SeguimientoFormComponent } from './components/seguimiento-form/seguimiento-form.component';

const routes: Routes = [
  {
    path: 'persona',
    component: PersonasListComponent
  },
  {
    path: 'persona/:id',
    component: PersonaUpdateComponent
  },
  {
    path: 'seguimiento/:id',
    component: SeguimientoFormComponent
  },
  {
    path: '',
    redirectTo: '/persona',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
