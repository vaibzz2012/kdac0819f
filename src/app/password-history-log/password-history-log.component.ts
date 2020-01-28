import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-history-log',
  templateUrl: './password-history-log.component.html',
  styleUrls: ['./password-history-log.component.css']
})
export class PasswordHistoryLogComponent implements OnInit {
  passwordlog:any;
  constructor(private service:DashboardService,private router:Router) {
    this.getPasswordLog();
   }

  ngOnInit() {
  }

  getPasswordLog()
  {
    this.service.getPasswordLog().subscribe((res:any)=>{
      this.passwordlog = res.Data;
      console.log(this.passwordlog);
    })
  }

}
