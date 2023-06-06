import { Component, Inject, OnInit, } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Nasheed } from 'src/app/models/nasheed';
import { MunsheedService } from 'src/app/services/munsheed.service';
import { NasheedService } from 'src/app/services/nasheed.service';

@Component({
  selector: 'app-editnasheed',
  templateUrl: './editnasheed.component.html',
  styleUrls: ['./editnasheed.component.css']
})
export class EditnasheedComponent implements OnInit {
  
 
  userForm!: FormGroup;
  id: any;
  munsheeds:any;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public nasheed: Nasheed,
    public dialogRef: MatDialogRef<EditnasheedComponent>,
    private nasheedService: NasheedService,
    private munsheedService: MunsheedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }
 
  ngOnInit(): void {
    const data = this.nasheed;
    this.userForm= new FormGroup({
      
          name: new FormControl(data.name,[Validators.required]),
          description: new FormControl(data.description,[Validators.required]),
          producerName: new FormControl(data.producerName,[Validators.required]),
          audio: new FormControl(data.audio,[Validators.required]),
          customerId: new FormControl(data.audio),
      })
      }
      
      getAllMunsh(){
        this.munsheedService.getAll().subscribe((munsheed:any)=>{
          this.munsheeds=munsheed;
    
        })
      }
      // onSave() {
      //   this.nasheedServices.add(this.userForm.value).subscribe((data:any)=>{
      //     this.reload();
      //     this.dialogRef.close();
      //   })
      // }
      
      onUpdate() {
        const id = this.userForm.value.id
        const value = this.userForm.value
        this.nasheedService.update(id, value).subscribe((data: any) => {
          this.reload();
          this.dialogRef.close();
        })
      }
      reload(){
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['nasheed'])
        });
      }
  }


  



