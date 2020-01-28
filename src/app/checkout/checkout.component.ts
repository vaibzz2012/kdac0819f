import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id: any;brand:any;model:any;dp:any;img:any;
  r: any;
  s: any;
  cars: any;
  u: any;
  name: any;
  sdate:any;
  rdate:any;
  diff:any;
  diffDays;
  tr:any;
  gt:any;
  refund: any;
  cid:any;
  resId: any;
  constructor(public service:DashboardService,public router:Router) 
  {
    this.s = sessionStorage.getItem("startdate");
    console.log(this.s);
    this.r = sessionStorage.getItem("returndate");
    this.u = sessionStorage.getItem("UserId");
    this.name = sessionStorage.getItem("Username");
    this.sdate = new Date(this.s);
    this.rdate = new Date(this.r);
    this.brand  = sessionStorage.getItem("brand");
    this.model  = sessionStorage.getItem("model");
    this.dp = sessionStorage.getItem("price");
    this.img = sessionStorage.getItem("imgsrc");
    console.log(this.brand);
    this.diff = Math.abs(this.sdate.getTime() - this.rdate.getTime());
    this.diffDays = Math.ceil(this.diff/(1000*3600*24));
    console.log(this.diffDays);
  }


  ngOnInit() {
    this.TotalRent();
    this.GrandTotal();
  }
 

  TotalRent()
  {
      this.tr = this.dp * this.diffDays;
      console.log(this.tr);
  }

  GrandTotal()
  {
    this.gt = this.tr + 1500; 
  }

  CheckOut(diffDays:any,dp:any,tr:any)
  {
    this.dp = dp;
    this.diffDays = diffDays;
    this.tr = tr;
    this.refund = 2000;
    this.cid = sessionStorage.getItem("CarId");
    this.resId = sessionStorage.getItem("ResId"); 
    this.service.Rent({trd:this.diffDays,drf:this.dp,tot:this.tr,ref:this.refund,cid:this.cid,uid:this.u,rid:this.resId}).subscribe((res:any) => {
    sessionStorage.setItem("GTotal",this.gt);
      console.log(res);
      this.router.navigate(['/pay']);
      
      });
  
  }
}
