import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public router :Router) { }

  ngOnInit() {
  }
  search(value:any)
  {
    
    console.log(value);
    sessionStorage.setItem("startdate",value.StartDate)
    sessionStorage.setItem("returndate",value.ReturnDate);
    this.router.navigate(['/carList']);
  }

}
