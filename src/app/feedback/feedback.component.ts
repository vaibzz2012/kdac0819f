import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
uid:any;
  constructor(private service:UserService,public router : Router) {
    this.uid = sessionStorage.getItem("UserId");
   }

  ngOnInit() {
  }

  postfb(obj:any)
  {
    let res = this.service.postfb(obj,this.uid).subscribe((CarData:any)=>{
      if(CarData.Error == null)
      {
        // this.message = CarData.Status;
        console.log(CarData);
        alert("Feedback Added,Thank you!");
        this.router.navigate(['/home']);

      }
    })

}
}