import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { NasheedService } from 'src/app/services/nasheed.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MunsheedService } from 'src/app/services/munsheed.service';

@Component({
  selector: 'app-addnasheed',
  templateUrl: './addnasheed.component.html',
  styleUrls: ['./addnasheed.component.css']
})
export class AddnasheedComponent {
 userForm!: FormGroup;
 munsheeds: any;

  constructor( private nasheedServices: NasheedService,
    private munsheedService: MunsheedService,
    public router: Router,
    public dialogRef:MatDialogRef<AddnasheedComponent>, ) {}
 

  ngOnInit(): void {
    this.getAllMunsh();
    this.userForm= new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      producerName: new FormControl('',[Validators.required]),
      audio: new FormControl('',[Validators.required]),
     customerId: new FormControl('',[Validators.required],)
    });
  }
  
  getAllMunsh(){
    this.munsheedService.getAll().subscribe((munsheed:any)=>{
      this.munsheeds=munsheed;

    })
  }
  onSave() {
    this.nasheedServices.add(this.userForm.value).subscribe((data:any)=>{
      this.reload();
      this.dialogRef.close();
    })
  }
  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/nasheed']);
    })
  }
}
    
  


    



