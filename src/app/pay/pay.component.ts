import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {
gTotal:any;
  brand: string;
  model: string;
  uid: string;
  response:any;
  constructor(public service:DashboardService,public router:Router) {
    this.brand  = sessionStorage.getItem("brand");
    this.model  = sessionStorage.getItem("model");
    this.gTotal = sessionStorage.getItem("GTotal");
    this.uid = sessionStorage.getItem("UserId");
   }

  ngOnInit() {
  }

  pay()
  {
    this.service.sendE(this.uid).subscribe((res):any=>{
      this.response = res;
      console.log(this.response);
      alert("Payment Succesfull !!");
      this.router.navigate(['/home']);
    })
  }

}
