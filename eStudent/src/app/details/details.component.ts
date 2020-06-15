import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  student:any;
  data:any;

  constructor(private route:ActivatedRoute) {  }

  ngOnInit(): void {
    this.data = this.route.params.subscribe(params =>{ 
      this.student = params["id"];
      console.log(params)
    })

  }

}
