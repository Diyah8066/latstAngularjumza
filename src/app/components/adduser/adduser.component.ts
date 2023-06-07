import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  userForm!: FormGroup;

  constructor( 
    private userService: UserService,
    private router: Router,
    public dialogRef: MatDialogRef<AdduserComponent>, ) {}

    ngOnInit(): void{
      this.userForm= new FormGroup({
        f_Name: new FormControl ('',[Validators.required]),
        l_Name: new FormControl('',[Validators.required]),
        address: new FormControl('',[Validators.required]),
        phone: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
      
      });
    }
    onSave() {
      this.userService.add(this.userForm.value).subscribe((data:any)=>{
        this.reload();
        this.dialogRef.close();
      })
    }
    reload(){
      this.router.navigateByUrl('',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/usser']);
      })
    }
}
