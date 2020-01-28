import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { PasswordHistoryLogComponent } from './password-history-log/password-history-log.component';
import { AddUserComponent } from './add-user/add-user.component';
import { CarListComponent } from './car-list/car-list.component';
import { AdminCarListComponent } from './admin-car-list/admin-car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { AuthServiceService } from './auth-service.service';
import { PayComponent } from './pay/pay.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { RoleComponent } from './role/role.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(
   
    [
     
    {path:'',component:HomeComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'ForgotPassword',component:ForgotPasswordComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthServiceService],children:[
          {path:'userlist',component:UserListComponent},
          {path:'passlog',component:PasswordHistoryLogComponent},
          {path:'addUser',component:AddUserComponent},
          {path:'admincarlist',component:AdminCarListComponent},
          {path:'addcar',component:AddCarComponent},
          {path:'reslist',component:ReservationListComponent},
          {path:'rentlist',component:RentListComponent},
          {path:'updatecar',component:UpdateCarComponent},
          {path:'feedbacklist',component:FeedbackListComponent}
    ]},
    {path:'carList',component:CarListComponent},
    {path:'checkout',component:CheckoutComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'pay',component:PayComponent},
    {path:'manageprofile',component:ManageProfileComponent},
    {path:'updateprofile',component:UpdateProfileComponent},
    {path:'myres',component:CustomerReservationComponent},
    {path:'role',component:RoleComponent}
    
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
