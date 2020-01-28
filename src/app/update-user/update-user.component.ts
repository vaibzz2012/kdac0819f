import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id:any;
  constructor(private service:DashboardService,private router:ActivatedRoute ) { }

  ngOnInit() {
  }

  FetchUser()
  {
    this.service.getUserList()
    .subscribe((userData:any)=>{
      this.id = userData.UserId
    })
  }

  UpdateUser(userObj)
  {
    this.service.updateUser(this.id,userObj)
    .subscribe((result:any)=>{
      console.log(result.Data);
      
    })
  }
}
