import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  message:string
  constructor(private service:DashboardService,public router : Router) { }

  ngOnInit() {
  }

  addCar(CarDataFromUI)
  {
    let res = this.service.addCar(CarDataFromUI).subscribe((CarData:any)=>{
      if(CarData.Error == null)
      {
        this.message = CarData.Status;
        console.log(CarData);
        alert("CarData Added Successfully");
        this.router.navigate(['/dashboard/admincarlist']);

      }
    })
  }

}
