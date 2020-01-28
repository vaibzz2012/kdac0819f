import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.css']
})
export class CustomerReservationComponent implements OnInit {
  uid:any;
  resList:any;
    constructor(public route:Router,public service:UserService) {
      this.uid = sessionStorage.getItem("UserId");
      this.getSpecRes();
    }
  
    ngOnInit() {
    }
  
    getSpecRes()
    {
      this.service.getSpecRes(this.uid).subscribe((res:any) =>{
        this.resList = res.Data;
        console.log(this.resList);
  
      })
    }
      Cancel()
      {
        alert("Booking Cancelled :("); 
        this.route.navigate(['/home']);
      }
  
    
}
