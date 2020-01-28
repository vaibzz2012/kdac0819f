import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-car-list',
  templateUrl: './admin-car-list.component.html',
  styleUrls: ['./admin-car-list.component.css']
})
export class AdminCarListComponent implements OnInit {
cars:any
  constructor(private service:DashboardService,private router:Router) { 
    this.getCars();
  }

  ngOnInit() {
  }
  getCars()
  {

    this.service.getCars().subscribe((res:any)=>{
      this.cars = res.Data;
      console.log(this.cars);
    })
  } 
}
