import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:UserService ,  public router : Router) { }

  ngOnInit() {
  }

  AddUser(credentials:any)
  {
    console.log(credentials);
    let resultstate = this.service.AddUser(credentials);

    resultstate.subscribe((data:any) =>{
      if(data.Status=="Success")
      {
        alert("Registration Done");
        this.router.navigate(['/login']);
      }
      else{
        console.log(data);
        alert("Something Went Wrong");
        this.router.navigate(['/register']);
      }
    });
  }
}
