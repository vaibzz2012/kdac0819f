import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) {

   }

   getUserList()
   {
     return this.http.get("http://localhost:58084/api/Dashboard/UserList");
   }

   getPasswordLog()
   {
     return this.http.get("http://localhost:58084/api/Dashboard/PasswordLog");
   }

  addUser(User: any)
  {
    return this.http.post("http://localhost:58084/api/User/UserAdd",User);
  }
  
  updateUser(id: string,User: any)
  {
    return this.http.put("http://localhost:58084/api/User/UserUpdate/"+id,User);
  }

  getCars()
  {
    return this.http.get("http://localhost:58084/api/Car");
  }

  addCar(Car: any)
  {
    return this.http.post("http://localhost:58084/api/Car",Car);
  }

  getResList()
  {
    return this.http.get("http://localhost:58084/api/Reservation");
  }
  Reservecar({ u, s, r, c ,rd }: { u: any; s: any; r: any; c: any; rd:any})
  {
    var obj={
      "UserId":u,
      "CarId":c,
      "PickupDate":s,
      "ReturnDate":r,
      "ReservationDate":rd
    }
    console.log(obj);
    return this.http.post("http://localhost:58084/api/Reservation",obj);

  }

  getRentList()
  {
    return this.http.get("http://localhost:58084/api/Rent");
  }

  Rent({trd,drf,tot,ref,cid,uid,rid}: {trd: any;drf: any;tot: any;ref: any;cid: any;uid: any;rid: any})
  {
    var obj ={
      "UserId":uid,
      "CarId":cid,
      "TotalRentDay":trd,
      "DailyRentFee":drf,
      "Total":tot,
      "Refund":ref,
      "ReservationId":rid
    }
    console.log(obj);
    return this.http.post("http://localhost:58084/api/Rent",obj);
  }

  getSpecCar(id)
  {
    return this.http.get("http://localhost:58084/api/Car/"+id);
  }

  updateCar(id,obj)
  {
    return this.http.put("http://localhost:58084/api/Car/"+id,obj);
  }

  sendE(id:any)
  {
    var obj1 = {
      "RoleId":null
    }
    console.log(obj1);
    return this.http.put("http://localhost:58084/api/User/confirmation/"+id,obj1);
    
  }
}
// Reservecar({ u, s, r, c }: { u: any; s: any; r: any; c: any; })
