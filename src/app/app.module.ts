import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { MunsheedComponent } from './components/munsheed/munsheed.component';
import { HttpClientModule } from '@angular/common/http';
import { NasheedComponent } from './components/nasheed/nasheed.component';
import { AddmunsheedComponent } from './components/addmunsheed/addmunsheed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditmunsheedComponent } from './components/editmunsheed/editmunsheed.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule} from '@angular/material/card';
import { EditnasheedComponent } from './components/editnasheed/editnasheed.component';
import { ViewQualificationComponent } from './components/view-qualification/view-qualification.component';
import { AddnasheedComponent } from './components/addnasheed/addnasheed.component';
import { LoginComponent } from './components/login/login.component';
import { NasheedStatusComponent } from './components/nasheed-status/nasheed-status.component';
import { AddnasheedStatusComponent } from './components/addnasheed-status/addnasheed-status.component';
import { EditnasheedstatusComponent } from './components/editnasheedstatus/editnasheedstatus.component';
import { UserComponent } from './components/user/user.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { EventsComponent } from './components/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ComponentsComponent,
    HomeComponent,
    MunsheedComponent,
    NasheedComponent,
    AddmunsheedComponent,
    EditmunsheedComponent,
    EditnasheedComponent,
    ViewQualificationComponent,
    AddnasheedComponent,
    LoginComponent,
    NasheedStatusComponent,
    AddnasheedStatusComponent,
    EditnasheedstatusComponent,
    UserComponent,
    AdduserComponent,
    EdituserComponent,
    EventsComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
   
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
