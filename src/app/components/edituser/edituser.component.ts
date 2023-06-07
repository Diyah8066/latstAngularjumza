import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {

  userForm!: FormGroup;
  id: any;


constructor(
  @Inject(MAT_DIALOG_DATA) 
  public user: User,
  public dialogRef: MatDialogRef<EdituserComponent>,
  private UserService: UserService,
  private router: Router,
  private activatedRoute: ActivatedRoute,
) { }

ngOnInit(): void {
  const data = this.user;
  this.userForm= new FormGroup({
  id: new FormControl(data.id),
  f_Name: new FormControl(data.f_Name, [Validators.required]),
  l_Name: new FormControl(data.l_Name, [Validators.required]),
  address: new FormControl(data.address, [Validators.required]),
  phone: new FormControl(data.phone, [Validators.required]),
  email: new FormControl(data.email, [Validators.required]),
  
  
})
}
onUpdate() {
  const id = this.userForm.value.id
  const value = this.userForm.value
  this.UserService.update(id, value).subscribe((data: any) => {
    this.reload();
    this.dialogRef.close();
  })
}
reload(){
  this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
    this.router.navigate(['user'])
  });
}






}