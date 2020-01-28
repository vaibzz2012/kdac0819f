import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.css']
})
export class RentListComponent implements OnInit {
rentList:any;
  constructor(private service:DashboardService,private router:Router) {
    this.getrentList();
   }

  ngOnInit() {
   }

   getrentList()
  {

    this.service.getRentList().subscribe((res:any)=>{
      this.rentList = res.Data;
      console.log(this.rentList);
    })
  } 

}
