import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.css']
})
export class LoginComponent {
    constructor(private authService:AuthService, 
                private router:Router) 
    { }

    login(formValues: any) {
      this.authService.loginUser(formValues.userName, formValues.password)
      this.router.navigate(['assets'])
    }

    cancel() {
      this.router.navigate(['assets'])
  }
  
}