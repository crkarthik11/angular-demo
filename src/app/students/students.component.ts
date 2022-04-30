import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:any
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      this.http.get('http://localhost:8080/student/getAll').subscribe( e => {
        this.students = e;
        console.log(this.students[0])
      });


  }


}
