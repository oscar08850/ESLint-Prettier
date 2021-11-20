import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../interfaces/Subject';
import { Router} from '@angular/router'
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjects:Array<Subject>
  constructor(private subjectService:SubjectService, private router:Router) { 
    this.subjects=[]
  }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe(
      res=>{
        console.log(res)
        this.subjects=res
      },
      err=>console.log(err)
    )
  }
  seeSubject(id:string|undefined){
    this.router.navigate(['/subjects/'+id])
  }


}
