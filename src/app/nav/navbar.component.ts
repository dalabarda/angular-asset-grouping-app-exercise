import { Component } from '@angular/core'
import { AuthService } from './../user/auth.service' // this component is to show the data from the 'user.model' 

import { AppMenuDropdown }  from './nav/dropdown.component';
import { AppMenuItem }  from './nav/menu-item.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent {
	constructor(private auth: AuthService) {}


  testingAContidion(item: any ):string { // MenuItem -> type
    if (item.getName == 'All Assets')
      return '{exact:true}';
    else
      return '{exact:false}';
  }


  onDropdownClass(item: any):string { // MenuItem -> type
    if (!item.isEnabled || item.onClick().length == 0)
      return 'disabled';
    else
      return 'dropdown-item';
  }

  menu  = [
        {
          getName: 'BBC Web site',
          isEnabled: true,
          isVisible: true,
          onClick: () => 'https://www.bbc.com/',
        },
        {
          getName: 'Google',
          isEnabled: true,
          isVisible: false,
          onClick: () => 'https://www.google.com/',
        },
        {
          getName: 'Wikipedia.',
          isEnabled: true, // this.menuToDo() == '1' ? false : false
          isVisible: true,
          onClick: () => 'https://en.wikipedia.org/wiki/Main_Page',
        },
        {
          getName: 'Insert a Group_TODO',
          isEnabled: true, // this.menuToDo() == '1' ? false : false
          isVisible: true,
          onClick: () => '',
        },
        ];


  get items(): any[]
  {
    return this.menu;
  }

}