import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service' // in order to get the current user information from the AuthService
import { Router } from '@angular/router' // this router is because I created the cancel() to navigate back to events page.




@Component({
  templateUrl: "./profile.component.html",
  styles: [`
    em {float:right; color:#E05C65; padding-left: 10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
    profileForm:FormGroup // creating a property on a component. the need of a property on our component
                          // is because the profileForm is going to be accessed from the HTML template.

    private firstName:FormControl
    private lastName:FormControl

    constructor(private authService:AuthService, private router:Router) { // AuthService injection!!! always remember that!

    }

    ngOnInit() { // onInit give us a bit of typescript help.
        this.firstName = new FormControl(this.authService.currentUser.firstName,  // when they first render, they will have the values of the first name or the current user
                [ Validators.required, // validators are passed in as the second parameter of the FormControl. it is unit testable. important feature of reactive forms 
                Validators.pattern('[a-zA-Z].*')] // what if we want a multiple types of validators in our field? we just pass an array of validators to our FormControl.
                )
        this.lastName = new FormControl(this.authService.currentUser.lastName, // same as before, but for the last name.
                [Validators.required, Validators.pattern('[a-zA-Z].*')])
        
        // now we need to add these previous control to a form. As follows...
        this.profileForm = new FormGroup({
          firstName: this.firstName,  // the formControlName="lastName" in profile.component.html need to match this 'firstName' value here
          lastName: this.lastName    // the formControlName="lastName" in profile.component.html need to match this 'lastName' value here
        })
    }

    saveProfile(formValues: any) { // call a method in our auth.service
        if (this.profileForm.valid) { // it is a call to the save button that it will not save if it is invalid! 
                                      // this is an important procedure
          this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
          this.router.navigate(['events'])
        }
    }

    validateFirstName() {
      return this.firstName.valid || this.firstName.untouched
    }

    validateLastName() {
      return this.lastName.valid || this.lastName.untouched
    }

    cancel() {
      this.router.navigate(['events'])
    }
}




