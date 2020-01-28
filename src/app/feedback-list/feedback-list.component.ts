import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
fbs:any;
  constructor(public service:UserService,public router:Router) {
    this.getfb();
   }

  ngOnInit() {
  }
 
  getfb()
  {

    this.service.getfb().subscribe((res:any)=>{
      this.fbs = res.Data;
      console.log(this.fbs);
    })
  } 
}
