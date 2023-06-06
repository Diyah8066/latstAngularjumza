import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MunsheedService } from 'src/app/services/munsheed.service';

@Component({
  selector: 'app-view-qualification',
  templateUrl: './view-qualification.component.html',
  styleUrls: ['./view-qualification.component.css']
})
export class ViewQualificationComponent {

  id:any;
  munsheeds:any;
munsh: any;


  constructor(private munsheedServices: MunsheedService,
    private router: Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((body: any) => {
      this.id = body.id;
      let data = [];

      this.munsheedServices. getById(this.id).subscribe((munsheed: any) => {
        data = [munsheed];

        this.munsheeds = data;
        console.log(data)
      });
    });
  }


}
