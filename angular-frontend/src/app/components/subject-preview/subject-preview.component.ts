import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Subject } from '../../interfaces/Subject';
import { Student } from '../../interfaces/Student';
import { Phone } from '../../interfaces/Phone';
import { SubjectService } from 'src/app/services/subject.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-subject-preview',
  templateUrl: './subject-preview.component.html',
  styleUrls: ['./subject-preview.component.css']
})
export class SubjectPreviewComponent implements OnInit {

  id:string;
  subject:Subject;
  students:Array<Student>;

  constructor(private activeRoute:ActivatedRoute, private subjectService:SubjectService,private studentService:StudentService,private router:Router){ 
    this.id="";
    this.subject=<Subject>{};
    this.students=[]
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      res=> {this.id=res['id']
      this.subjectService.getSubject(this.id).subscribe(
        res=> this.subject=res,
        err=>console.log(err)
      )
    },
      err=>console.log(err)
    )
    this.studentService.getStudents().subscribe(
      res=>this.students=res,
      err=>console.log(err)
    )
  }
  
  studentSelected(id:string){
    this.router.navigate(['students/'+id])
  }
  addAlumno(id: string|undefined){
    this.router.navigate(['students/addAlumno/',id]);
  }

}
