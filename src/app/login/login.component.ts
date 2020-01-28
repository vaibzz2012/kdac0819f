import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service:UserService , public router : Router,public DataSharingService:DataSharingService ) { }

  ngOnInit() {
  }
  Login(credentials)
  {
    // alert("login ts");
    console.log(credentials);
    let rs = this.service.Login(credentials);
    rs.subscribe((data:any)=>{
      console.log(data);
      if (data != null) 
      {
        if(data.Status=="Success")
          {
            sessionStorage.setItem("isloggedIn","1");
            sessionStorage.setItem("Username",data.Data.Name);
            sessionStorage.setItem("UserId",data.Data.UserId);
            sessionStorage.setItem("RoleId",data.Data.RoleId);
            this.DataSharingService.isUserLoggedIn.next(true);
            alert("Login Success");
            this.router.navigate(['/home']);
          }
        else
        {
            sessionStorage.setItem("isloggedIn","1");
            sessionStorage.setItem("Username",data.Data.Name);
            sessionStorage.setItem("UserId",data.Data.UserId);
            this.DataSharingService.isAdminLoggedIn.next(true);
            alert("Login Success");
            this.router.navigate(['/dashboard']);
        }

    }

      else{
        console.log("=========");
        
        console.log(data);
        alert("Incorrect EmailId or Password");
        this.router.navigate(['/login']);
      }
    });
  }

  ForgotPassword()
  {
    this.router.navigate(['/ForgotPassword']);
  }
  
}
