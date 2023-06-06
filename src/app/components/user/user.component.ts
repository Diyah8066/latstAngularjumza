import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AdduserComponent } from '../adduser/adduser.component';

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

  
  onEdit(munsheed:any){
    const options = {
      data: munsheed,
      width: '50%',
      disableClose: true,
    };
    // const dialogRef = this.dialog.open(EditmunsheedComponent, options);
  }
  clickDelete(user:any){
    if(confirm("Are you sure to delete "+user.firstname+" "+user.lastName)) {
        this.userService.delete(user.id).subscribe((res:any)=>{
      this.getAllUser();
    })
    }
  }
}
