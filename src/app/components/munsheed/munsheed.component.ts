import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MunsheedService } from 'src/app/services/munsheed.service';
import { AddmunsheedComponent } from '../addmunsheed/addmunsheed.component';
import { EditmunsheedComponent } from '../editmunsheed/editmunsheed.component';

@Component({
  selector: 'app-munsheed',
  templateUrl: './munsheed.component.html',
  styleUrls: ['./munsheed.component.css']
})
export class MunsheedComponent implements OnInit{
  munsheeds:any;
id!:string;

  constructor(private munsheedService:MunsheedService,
    private router:Router,
    private activateRoute: ActivatedRoute,
    public dialog: MatDialog) {}

  ngOnInit(): void {

    this.getAllMunsh();
  }

  getAllMunsh(){
    this.munsheedService.getAll().subscribe((munsheed:any)=>{
      this.munsheeds=munsheed;

    })
  }
  onCreate() {
    const options = {
      width: '50%',
      disableClose: true,
    };
    const dialogRef = this.dialog.open(AddmunsheedComponent, options);
  }

  
  onEdit(munsheed:any){
    const options = {
      data: munsheed,
      width: '50%',
      disableClose: true,
    };
    const dialogRef = this.dialog.open(EditmunsheedComponent, options);
  }
  onView(element: any){
    this.router.navigate(['../view-qualification', element.id], {
      relativeTo: this.activateRoute,
    });
  }

  clickDelete(munsh:any){
    if(confirm("Are you sure to delete "+munsh.firstname+" "+munsh.lastName)) {
        this.munsheedService.delete(munsh.id).subscribe((res:any)=>{
      this.getAllMunsh();
    })
    }
  }
}
