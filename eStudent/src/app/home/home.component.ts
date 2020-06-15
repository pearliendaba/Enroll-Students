import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Students } from '../student.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedStudent: any;
  name: string;
  students:any = []; 
  
  headElements = ['ID', 'First', 'Email', 'Module(s)', 'Date Registred', 'Date Edited', 'Action'];

  constructor(private service:StudentService) {
    this.getStudent(name);
    this.getAllStudents();
  }

  getAllStudents(){
    this.service.getStud().subscribe((data) =>{
      this.students=data
      console.log(data);
    })
  }
  ngOnInit(): void {
  }


  onSelectedStudent(student) {
    this.selectedStudent = student;
    this.name = student.name;
  }

  getStudent(name) {
    //this.service.getStudent(['/details', name]);
  }



}
