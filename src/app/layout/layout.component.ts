import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MunsheedService } from '../services/munsheed.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  munsheeds: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
    private router: Router,
    private munsheedService: MunsheedService) { }

  // ngOnInit(): void {
  //   const username = localStorage.getItem("username");
  //   this.munsheedService.getByEmail(username).subscribe((res: any) => {
  //     console.log(res[0]);
  //     localStorage.setItem("id", res[0].id);
  //   })
  // }
  // onPassword() { }
  // onLogout() {
  //   localStorage.clear();
  //   this.router.navigate(['']);
  // }
}
