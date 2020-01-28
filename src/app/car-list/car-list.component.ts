import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  r: any;
  s: any;
  cars: any;
  u: any;
  name: any;
  sdate:any;
  rdate:any;
  reservationDate:any
  resId:any
  constructor(private service: DashboardService, private router: Router) {

    this.getCars();
  }

  ngOnInit() {
    this.s = sessionStorage.getItem("startdate");
    console.log(this.s);
    this.r = sessionStorage.getItem("returndate");
    this.u = sessionStorage.getItem("UserId");
    this.name = sessionStorage.getItem("Username");
    this.sdate = new Date(this.s);
    this.rdate = new Date(this.r);
    console.log(name);
  }

  getCars() {

    this.service.getCars().subscribe((res: any) => {
    this.cars = res.Data;
    console.log(this.cars);
    })
  }
  BookNow(val: any,brand:any,model:any,dp:any,img:any) {
    sessionStorage.setItem("CarId", val);
    sessionStorage.setItem("brand",brand);
    sessionStorage.setItem("model",model);
    sessionStorage.setItem("price",dp);
    sessionStorage.setItem("imgsrc",img);
    console.log(val);
    console.log(brand);
    console.log(model);
    var carid = val;
    this.reservationDate = new Date();
    
    this.service.Reservecar({ u: this.u, s: this.sdate, r: this.rdate, c: carid,rd:this.reservationDate }).subscribe((res:any) => {
    
    console.log(res);
    sessionStorage.setItem("ResId",res.Data.ReservationId);
    this.router.navigate(['/checkout']);
    
    });

  }

}
