import { Component } from '@angular/core'
import { AuthService } from './../user/auth.service' // this component is to show the data from the 'user.model' 

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
	constructor(private auth: AuthService) {}
}