import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NasheedStutusService } from 'src/app/services/nasheed-stutus.service';
import { NasheedService } from 'src/app/services/nasheed.service';
import { AddnasheedComponent } from '../addnasheed/addnasheed.component';
import { AddnasheedStatusComponent } from '../addnasheed-status/addnasheed-status.component';

@Component({
  selector: 'app-nasheed-status',
  templateUrl: './nasheed-status.component.html',
  styleUrls: ['./nasheed-status.component.css']
})
export class NasheedStatusComponent {
  nasheeds:any

 
  constructor(private nasheedstutusService:NasheedStutusService,
    private nasheedService: NasheedService,
    private router: Router,
    private activateRoute:ActivatedRoute ,
    public dialog: MatDialog
    ) { }
 
    
    ngOnInit(): void {
      this.getAllnash();
     }
    getAllnash(){
      this.nasheedstutusService.getAll().subscribe((nasheed:any)=>{
        this.nasheeds=nasheed;
  
      })
    }
    
    

    onCreate() {
      const options = {
        width: '50%',
        disableClose: true,
      };
      const dialogRef = this.dialog.open(AddnasheedStatusComponent, options);
    }
   
  
    
    onEdit(nasheed: any){
      this.router.navigate(['../editnasheedstutus',nasheed.id], {
        relativeTo: this.activateRoute,
      });
    }
  
    clickDelete(nash:any){
      if(confirm("Are you sure to delete "+nash.rejected+" ")) {
          this.nasheedService.delete(nash.id).subscribe((res:any)=>{
        this.getAllnash();
      })
      }
    }


}
