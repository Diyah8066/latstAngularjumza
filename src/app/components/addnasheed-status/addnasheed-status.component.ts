import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NasheedService } from 'src/app/services/nasheed.service';
import { NasheedStatusComponent } from '../nasheed-status/nasheed-status.component';
import { NasheedStutusService } from 'src/app/services/nasheed-stutus.service';

@Component({
  selector: 'app-addnasheed-status',
  templateUrl: './addnasheed-status.component.html',
  styleUrls: ['./addnasheed-status.component.css']
})
export class AddnasheedStatusComponent {
  userForm!: FormGroup;
 nasheeds: any;
  nasheedstutusService: any;

  constructor(private nasheedStutusService: NasheedStutusService,
    private nasheedService: NasheedService,
    public router: Router,
    public dialogRef:MatDialogRef<AddnasheedStatusComponent>, ) {}
 

  ngOnInit(): void {
    this.getAllMunsh();
    this.userForm= new FormGroup({
      statusname: new FormControl('',[Validators.required]),
      reasons: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      nasheedId: new FormControl('')
    });
  }
  
  getAllMunsh(){
    this.nasheedService.getAll().subscribe((nasheed:any)=>{
      this.nasheeds=nasheed;

    })
  }
  onSave() {
    this.nasheedstutusService.add(this.userForm.value).subscribe((data:any)=>{
      this.reload();
      this.dialogRef.close();
      console.log
    })
  }
  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/nasheedstutus']);
    })
  }


}
