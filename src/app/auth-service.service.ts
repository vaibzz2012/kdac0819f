import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate ,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements CanActivate {
userData:any;
  constructor(public router:Router) { }

  isLoggedIn()
  {
    return (sessionStorage.getItem("isloggedIn") == "1");
  }
  canActivate(  route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    if (this.isLoggedIn())
    {
      return true;
    } else 
    {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isAdmin()
  {
    return (sessionStorage.getItem("RoleId")=="1");
  }

  // Login(data:any)
  // {
  //   debugger
  //   sessionStorage.setItem("isLoggedIn", "1");
  //   sessionStorage.setItem("EmailId",data.Data.EmailId);
  //   sessionStorage.setItem("UserId", data.Data.UserId);
  //   sessionStorage.setItem("RoleId", data.Data.RoleId);
  //   sessionStorage.setItem("userData", JSON.stringify(data));
  //   this.userData = data;
  //   this.router.navigate(['/dashboard']);
  //  return true;
  // }

  Logout()
  { 
    sessionStorage.setItem("isLoggedIn", "0");
    delete sessionStorage["EmailId"];
    delete sessionStorage["UserId"];
    delete sessionStorage["userData"];
    delete sessionStorage["RoleId"];
    delete sessionStorage["isLoggedIn"];
    this.router.navigate(['/login']);
  }
}
