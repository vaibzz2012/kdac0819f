import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:any;
  constructor(private service:DashboardService,private router:Router) {
    this.getUserList();
   }

  ngOnInit() {
  }

  getUserList()
  {
 
    this.service.getUserList().subscribe((res:any)=>{
      
      this.users = res.Data;
      console.log(this.users)
    })
    
  }

}
