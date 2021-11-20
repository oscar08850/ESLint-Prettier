import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'
import { Subject } from '../../interfaces/Subject';
import { Student } from '../../interfaces/Student';
import { Phone } from '../../interfaces/Phone';
import { SubjectService } from 'src/app/services/subject.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-preview',
  templateUrl: './student-preview.component.html',
  styleUrls: ['./student-preview.component.css']
})
export class StudentPreviewComponent implements OnInit {

  id:string;
  student:Student;
  phone1:Phone;
  phone2:Phone;
  constructor(private activeRoute:ActivatedRoute, private studentService:StudentService) { 
    this.id=""
    this.student=<Student>{}
    this.phone1=<Phone>{}
    this.phone2=<Phone>{}
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      res=> {this.id=res['id']
      this.studentService.getStudent(this.id).subscribe(
        res=> {
          this.student=res
          this.phone1=this.student.phones[0]
          this.phone2=this.student.phones[1]
        },
        err=>console.log(err)
      )
    },
    err=>console.log(err))
  }


}
