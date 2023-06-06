import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NasheedStutus } from 'src/app/models/nasheed-stutus';
import { NasheedStutusService } from 'src/app/services/nasheed-stutus.service';
import { NasheedService } from 'src/app/services/nasheed.service';

@Component({
  selector: 'app-editnasheedstatus',
  templateUrl: './editnasheedstatus.component.html',
  styleUrls: ['./editnasheedstatus.component.css']
})
export class EditnasheedstatusComponent  {

  userForm!: FormGroup;
  id: any;
  nasheeds:any;
  nasheedStutus: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public nasheed: NasheedStutus,
    public dialogRef: MatDialogRef<EditnasheedstatusComponent>,
    private NasheedStutusService: NasheedStutusService,
    private nasheedService: NasheedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const data = this.nasheedStutus;
    this.userForm= new FormGroup({
      
      statusname: new FormControl(data.name,[Validators.required]),
      reasons: new FormControl(data.description,[Validators.required]),
      description: new FormControl(data.producerName,[Validators.required]),
      nasheedId: new FormControl(data.name),
      })
      }
  
      getAllNash(){
        this.nasheedService.getAll().subscribe((nasheeds:any)=>{
          this.nasheed=nasheeds;
    
        })
      }
      onUpdate() {
        const id = this.userForm.value.id
        const value = this.userForm.value
        this.NasheedStutusService.update(id, value).subscribe((data: any) => {
          this.reload();
          this.dialogRef.close();
        })
      }
      reload(){
        this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
          this.router.navigate(['nasheedstutus'])
        });
      }

}
