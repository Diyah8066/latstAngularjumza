import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MunsheedService } from 'src/app/services/munsheed.service';
import { NasheedService } from 'src/app/services/nasheed.service';
import { AddnasheedComponent } from '../addnasheed/addnasheed.component';
import { EditnasheedComponent } from '../editnasheed/editnasheed.component';

@Component({
  selector: 'app-nasheed',
  templateUrl: './nasheed.component.html',
  styleUrls: ['./nasheed.component.css']
})
export class NasheedComponent implements OnInit {
  nasheeds: any;
  nash:any
 
  constructor(private nasheedService:NasheedService,
    private munsheedService: MunsheedService,
    private router: Router,
    private activateRoute:ActivatedRoute ,
    public dialog: MatDialog
    ) { }
 
    
    ngOnInit(): void {
      this.getAllnash();
     }
    getAllnash(){
      this.nasheedService.getAll().subscribe((nasheed:any)=>{
        this.nasheeds=nasheed;
        console.log(nasheed);
        
  
      })
    }
    
    

    onCreate() {
      const options = {
        width: '50%',
        disableClose: true,
      };
      const dialogRef = this.dialog.open(AddnasheedComponent, options);
    }
   
  
    // onEdit(){
    //   const options = {
    //     width: '60%',
    //     disableClose: true,
    //   };
    //   const dialog = this.dialog.open(EditnasheedComponent,options);
    // }
    
    onEdit(nasheed: any){
      this.router.navigate(['../editnasheed',nasheed.id], {
        relativeTo: this.activateRoute,
      });
    }
  
    clickDelete(nash:any){
      if(confirm("Are you sure to delete "+nash.name+" "+nash.name)) {
          this.nasheedService.delete(nash.id).subscribe((res:any)=>{
        this.getAllnash();
      })
      }
    }
  
  }
  
  



