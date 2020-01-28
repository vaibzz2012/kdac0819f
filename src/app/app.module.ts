import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PasswordHistoryLogComponent } from './password-history-log/password-history-log.component';
import { OnlineUsersComponent } from './online-users/online-users.component';
import { RoleComponent } from './role/role.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule  } from '@angular/common/http';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CarListComponent } from './car-list/car-list.component';
import { AddCarComponent } from './add-car/add-car.component';
import { AdminCarListComponent } from './admin-car-list/admin-car-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RentListComponent } from './rent-list/rent-list.component';
import { UpdateCarComponent } from './update-car/update-car.component';
import { PayComponent } from './pay/pay.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { DataSharingService } from './data-sharing.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    RegisterComponent,
    DashboardComponent,
    PasswordHistoryLogComponent,
    OnlineUsersComponent,
    RoleComponent,
    ChangePasswordComponent,
    HomeComponent,
    ForgotPasswordComponent,
    UserListComponent,
    AddUserComponent,
    UpdateUserComponent,
    CarListComponent,
    AddCarComponent,
    AdminCarListComponent,
    ReservationListComponent,
    CheckoutComponent,
    RentListComponent,
    UpdateCarComponent,
    PayComponent,
    FeedbackComponent,
    FeedbackListComponent,
    CustomerReservationComponent,
    ManageProfileComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
