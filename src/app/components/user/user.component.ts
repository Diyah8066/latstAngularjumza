import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AdduserComponent } from '../adduser/adduser.component';
import { EdituserComponent } from '../edituser/edituser.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  {
 user:any

 constructor(private userService:UserService,
  private router:Router,
  private activateRoute: ActivatedRoute,
  public dialog: MatDialog,) {}

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(){
    this.userService.getAll().subscribe((user:any)=>{
      this.user=user;

    })
  }

  onCreate() {
    const options = {
      width: '50%',
      disableClose: true,
    };
    const dialogRef = this.dialog.open(AdduserComponent, options);
  }

  
  onEdit(user:any){
    const options = {
      data: user,
      width: '50%',
      disableClose: true,
    };
    const dialogRef = this.dialog.open(EdituserComponent, options);
  }
  clickDelete(user:any){
    if(confirm("Are you sure to delete "+user.firstname+" "+user.lastName)) {
        this.userService.delete(user.id).subscribe((res:any)=>{
      this.getAllUser();
    })
    }
  }
}
