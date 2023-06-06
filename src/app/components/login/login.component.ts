import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userForm:any;

  constructor(private loginService: LoginService,
    private router: Router){}
  
  ngOnInit(): void{
    this.userForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required]),    
    })
  }
  onUpdate() {
    const id = this.userForm.value.username;
    const value = this.userForm.value.password;
    this.loginService.login(id, value).subscribe((data: any) => {
      // localStorage.setItem("username", data.)
      this.router.navigate(['/home']);
    })
  }


}

