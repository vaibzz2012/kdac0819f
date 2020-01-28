import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

uid:any;
car:any;
  resp: any;
  constructor(public route:Router,public service:UserService) {
    this.uid = sessionStorage.getItem("UserId");
    this.getSpecUser();
  }
  ngOnInit() {
  }
  getSpecUser()
  {
    this.service.getSpecUser(this.uid).subscribe((res:any) =>{
      this.car = res.Data;
      console.log(this.car);

    })
  }

    updateUser()
    {
      this.service.updateUser(this.uid,this.car).subscribe((res:any)=>{
        this.resp = res.Data;
        console.log(this.resp);
        this.route.navigate(['/manageprofile']);
    })
  }
}