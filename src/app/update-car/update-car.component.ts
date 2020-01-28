import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
id:any;
car:any;
resp:any;
  constructor(public route:ActivatedRoute,public service:DashboardService) {
    this.route.params.subscribe(params=>{
      this.id = Number.parseInt(params['cid']);
      this.getSpecCar();
    })
   }

  ngOnInit() {
  }

  getSpecCar()
  {
    this.service.getSpecCar(this.id).subscribe((res:any) =>{
      this.car = res.Data;
      console.log(this.car);

    })
  }

  updateCar()
  {
    this.service.updateCar(this.id,this.car).subscribe((res:any)=>{
      this.resp = res.Data;
      console.log(this.resp);
    })
  }
}
