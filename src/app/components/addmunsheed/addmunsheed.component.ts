import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { MunsheedService } from 'src/app/services/munsheed.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addmunsheed',
  templateUrl: './addmunsheed.component.html',
  styleUrls: ['./addmunsheed.component.css']
})
export class AddmunsheedComponent {
  userForm!: FormGroup;

  constructor( 
    private munsheedService: MunsheedService,
    private router: Router,
    public dialogRef: MatDialogRef<AddmunsheedComponent>, ) {}


  ngOnInit(): void{
    this.userForm= new FormGroup({
      firstname: new FormControl ('',[Validators.required]),
     middleName: new FormControl('',[Validators.required]),
     lastName: new FormControl('',[Validators.required]),
     nickname: new FormControl('',[Validators.required]),
     recordLabel: new FormControl('',[Validators.required]),
     phoneNumber: new FormControl('',[Validators.required,]),
     address: new FormControl('',[Validators.required]),
     gender: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required,Validators.email]),
     dob: new FormControl('',[Validators.required]),
     educationLevel: new FormControl('',[Validators.required]),
     programName: new FormControl('',[Validators.required]),
     institutionName: new FormControl('',[Validators.required]),
      
    });
  }
  onSave() {
    this.munsheedService.add(this.userForm.value).subscribe((data:any)=>{
      this.reload();
      this.dialogRef.close();
    })
  }
  reload(){
    this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/munsheed']);
    })
  }
}
