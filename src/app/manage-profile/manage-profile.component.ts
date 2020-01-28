import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
uid:any;
car:any;
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
}
