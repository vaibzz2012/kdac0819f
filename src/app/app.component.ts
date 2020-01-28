import { Component } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { DataSharingService } from './data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  flag:boolean;
  title = 'app';
  /**
   *
   */
  isUserLoggedIn: boolean;
  isAdminLoggedIn : boolean;

    constructor(private dataSharingService: DataSharingService,public router:Router) {

        // Subscribe here, this will automatically update 
        // "isUserLoggedIn" whenever a change to the subject is made.
        this.dataSharingService.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
        this.dataSharingService.isAdminLoggedIn.subscribe( value2 => {
          this.isAdminLoggedIn = value2;
      });
      }

  ngOnInit() 
  {
   
   
  }

  Logout()
  {
    this.isUserLoggedIn = false;
    this.isAdminLoggedIn = false;
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}
