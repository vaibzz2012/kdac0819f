import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  resList:any;
  constructor(private service:DashboardService,private router:Router) { 
    this.getresList();
  }

  ngOnInit() {
  } 
  getresList()
  {

    this.service.getResList().subscribe((res:any)=>{
      this.resList = res.Data;
      console.log(this.resList);
    })
  } 

}
