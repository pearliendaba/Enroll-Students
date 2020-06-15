import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedStudent: any;
  name: string;

  // private fieldArray: Array<any> = [];
  // private newAttribute: any = {};
  // addFieldValue() {
  //     this.fieldArray.push(this.newAttribute)
  //     this.newAttribute = {};
  // }

  elements: any = [
    {id: 1, name: 'Mark', email: 'mark@o.com', module: 'php', rDate: '12/06/2020', eDate: '12/06/2020'},
    {id: 2, name: 'Jacob', email: 'jacob@t.com', module: 'c++', rDate: '12/06/2020', eDate: '12/06/2020'},
    {id: 3, name: 'Larry', email: 'larry@s.com', module: 'c#', rDate: '12/06/2020', eDate: '12/06/2020'},
  ];

  headElements = ['ID', 'First', 'Email', 'Module(s)', 'Date Registred', 'Date Edited', 'Action'];

  constructor() {
    this.getStudent(name)
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
