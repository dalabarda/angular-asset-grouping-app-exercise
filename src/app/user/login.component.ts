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
      this.router.navigate(['assets']);

      //// relativeTo tells angular our currently active route
      // this.router.navigate(['assets'], {relativeTo: this.route});
    }

    cancel() {
      this.router.navigate(['assets'])
  }
  
}