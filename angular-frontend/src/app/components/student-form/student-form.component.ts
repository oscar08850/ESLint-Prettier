import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phone } from 'src/app/interfaces/Phone';
import { Student } from 'src/app/interfaces/Student';
import { Subject } from 'src/app/interfaces/Subject';
import { StudentService } from 'src/app/services/student.service';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
  id:string;
  subject:Subject;
  students:Array<Student>;

  constructor(private activeRoute:ActivatedRoute, private subjectService:SubjectService,private studentService:StudentService,private router:Router) { 
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

  addStudent(name:HTMLInputElement,address:HTMLInputElement,namephone1:HTMLInputElement,phone1:HTMLInputElement,namephone2:HTMLInputElement,phone2:HTMLInputElement):boolean{
    let phone_1:Phone;
    let phone_2:Phone;
    let phones:Array<Phone>=[];
    if(phone1){
      phone_1={'name':namephone1.value,'phone':phone1.value}
      phones.push(phone_1)
    }
    if(phone2){
      phone_2={'name':namephone2.value,'phone':phone2.value}
      phones.push(phone_2)
    }
    let studentId:any="";
    let student={'_id':"",'name':name.value,'address':address.value,'phones':phones}
    this.studentService.createStudent(student).subscribe(
      res=>{console.log(res)
      studentId=res._id
      let updatedSubject={'_id':this.subject._id,'name':this.subject.name,'students':this.subject.students?.concat(studentId)}
      this.subjectService.updateSubject(updatedSubject).subscribe(
        res=>{console.log(res);
        this.router.navigate(['/subjects/'])},
        err=>console.log(err)
      )
      },
      err=>console.log(err)
    )
    return false
  }

}
