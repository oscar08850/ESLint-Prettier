import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectPreviewComponent } from './components/subject-preview/subject-preview.component';
import { StudentPreviewComponent } from './components/student-preview/student-preview.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { PersonaUpdateComponent } from './components/persona-update/persona-update.component';
import { SeguimientoFormComponent } from './components/seguimiento-form/seguimiento-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SubjectListComponent,
    SubjectPreviewComponent,
    StudentPreviewComponent,
    StudentFormComponent,
    PersonasListComponent,
    PersonaUpdateComponent,
    SeguimientoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
