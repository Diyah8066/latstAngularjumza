import { Component, Inject, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MunsheedService } from 'src/app/services/munsheed.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Munsheed } from 'src/app/models/munsheed';

@Component({
  selector: 'app-editmunsheed',
  templateUrl: './editmunsheed.component.html',
  styleUrls: ['./editmunsheed.component.css']
})
export class EditmunsheedComponent {

  userForm!: FormGroup;
  id: any;



  constructor(
    @Inject(MAT_DIALOG_DATA)
    public munsheed: Munsheed,
    public dialogRef: MatDialogRef<EditmunsheedComponent>,
    private munsheedService: MunsheedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const data = this.munsheed;
    this.userForm= new FormGroup({
    id: new FormControl(data.id),
    firstname: new FormControl(data.firstname, [Validators.required]),
    middleName: new FormControl(data.middleName, [Validators.required]),
    lastName: new FormControl(data.lastName, [Validators.required]),
    nickname: new FormControl(data.nickname, [Validators.required]),
    recordLabel: new FormControl(data.recordLabel, [Validators.required]),
    phoneNumber: new FormControl(data.phoneNumber, [Validators.required,]),
    address: new FormControl(data.address, [Validators.required]),
    gender: new FormControl(data.gender, [Validators.required]),
    email: new FormControl(data.email, [Validators.required, Validators.email]),
    dob: new FormControl(data.dob, [Validators.required]),
    educationLevel: new FormControl(data.educationLevel,[Validators.required]),
    programName: new FormControl(data.programName,[Validators.required]),
    institutionName: new FormControl(data.institutionName,[Validators.required]),
  })
  }

    onUpdate() {
      const id = this.userForm.value.id
      const value = this.userForm.value
      this.munsheedService.update(id, value).subscribe((data: any) => {
        this.reload();
        this.dialogRef.close();
      })
    }
    reload(){
      this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
        this.router.navigate(['munsheed'])
      });
    }
  }









