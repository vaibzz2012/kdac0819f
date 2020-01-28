import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
message:string
  constructor(private service:DashboardService,public router : Router) { }

  ngOnInit() {
  }

  addUser(userDataFromUI)
  {
    let res = this.service.addUser(userDataFromUI).subscribe((userData:any)=>{
      if(userData.Error == null)
      {
        this.message = userData.Status;
        console.log(userData);
        alert("User Added Successfully");
        this.router.navigate(['/dashboard/userlist']);

      }
    })
  }

}
