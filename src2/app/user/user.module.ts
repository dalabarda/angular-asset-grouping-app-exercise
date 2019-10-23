import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router' // this three previous modules are the basic for a lazy loading procedure

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
      // 'ReactiveFormsModule' is because we are using Model-based(reactive) form for the profile page

      
import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

@NgModule({
  imports: [    // the imports in lazy loading looks a bit different 
    CommonModule, //
    FormsModule, // this allow us access to a number of different template-based forms features.
    ReactiveFormsModule,
    RouterModule.forChild(userRoutes) //
  ],
  declarations: [
    ProfileComponent, //
    LoginComponent
  ],
  providers: [

  ]
})
export class UserModule { 

}