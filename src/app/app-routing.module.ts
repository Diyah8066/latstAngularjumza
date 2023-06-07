import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { MunsheedComponent } from './components/munsheed/munsheed.component';
import { NasheedComponent } from './components/nasheed/nasheed.component';
import { AddmunsheedComponent } from './components/addmunsheed/addmunsheed.component';
import { EditmunsheedComponent } from './components/editmunsheed/editmunsheed.component';
import { ViewQualificationComponent } from './components/view-qualification/view-qualification.component';
import { AddnasheedComponent } from './components/addnasheed/addnasheed.component';
import { EditnasheedComponent } from './components/editnasheed/editnasheed.component';
import { LoginComponent } from './components/login/login.component';
import { NasheedStatusComponent } from './components/nasheed-status/nasheed-status.component';
import { AddnasheedStatusComponent } from './components/addnasheed-status/addnasheed-status.component';
import { EditnasheedstatusComponent } from './components/editnasheedstatus/editnasheedstatus.component';
import { UserComponent } from './components/user/user.component';
import { EventsComponent } from './components/events/events.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
 
    {
      path: '',
      component:LoginComponent
    },
    {
    path: '',
    component:LayoutComponent,

    
    children:[
      {
        path: 'home',
        component:HomeComponent,
      },


      {
        path:'munsheed',
        component:MunsheedComponent,
      },

      {
        path:'view-qualification/:id',
        component:ViewQualificationComponent,
      },

      {
        path:'nasheed',
        component:NasheedComponent,
      },
      
      {
        path:'addnasheed',
        component:AddnasheedComponent,
      },

      {
        path:'editnasheed/:id',
        component:EditnasheedComponent,
      },
      {
        path:'addmunsheed',
        component:AddmunsheedComponent,
      }, 
      
      {
        path:'editmunsheed/:id',
        component:EditmunsheedComponent,
      },
      {
        path:'nasheed-status',
        component:NasheedStatusComponent,
      },
      {
        path:'addnasheedStatus',
        component:AddnasheedStatusComponent,
      },

      {
        path:'editnasheedStatus/:id',
        component:EditnasheedstatusComponent,
      },

      {
        path:'user',
        component:UserComponent,
      },
      {
        path:'event',
        component:EventsComponent,
      },
      {path:'edituser/:id',
        component:EdituserComponent,
      }
      
      
  
     


 
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
