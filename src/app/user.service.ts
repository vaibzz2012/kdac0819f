import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public router:Router,public http: HttpClient) { }
  AddUser(Userdata:any)
  {
    console.log("user reg service");
    return this.http.post("http://localhost:58084/api/User/UserAdd",Userdata);
  }

  Login(credentials:any)
  {
    
    return this.http.post("http://localhost:58084/api/Login",credentials);
  }

  // Logout(){
  //   sessionStorage.setItem("isloggedIn","0");
  // }

  OTPGenerate(email)
  {
    alert("inside OTPGenerate  ");
    var RUser={
      "EmailId":email,
      
     };

    return this.http.post(`http://localhost:58084/api/User/IsExist`, RUser);
  }
  OTPValidate(otp,email)
  {
    
    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "OTP":otp
     };

   
     console.log(RUser);
    
    return this.http.post(`http://localhost:58084/api/User/OTP`, RUser,);
  }

  Passwordreset(password,email)
  {

    alert("inside validateOTP");
    var RUser={
      "EmailId":email,
      "Password":password,
      
     };

      console.log(RUser);
     
    return this.http.put(`http://localhost:58084/api/User/UpdatePassword`, RUser);
  }
postfb(fb:any,uid:any)
{
  var obj = {
    "Message":fb,
    "UserId":uid
  };
  return this.http.post("http://localhost:58084/api/Dashboard/Feedback",obj);
}

getfb()
{
  return this.http.get("http://localhost:58084/api/Dashboard/Feedback");
}

getSpecUser(id)
{
  return this.http.get("http://localhost:58084/api/User/"+id);
}

updateUser(id:any,obj:any)
{

  return this.http.put("http://localhost:58084/api/User/UserUpdate/"+id,obj);
}
getSpecRes(id:any)
{
  return this.http.get("http://localhost:58084/api/Reservation/GetSpec/"+id);
}

}
