import { Component } from '@angular/core';


@Component({
  selector: 'my-menu-dropdown',
  template: `
      <ul class="nav2 dropdown" appDropdown>
        <li>
          <a class="dropdown">Dropdown</a>
        </li>
        <div class="dropdown-menu">
          <li>
            <a class="dropdown-item">li and a</a>
          </li>
          <li class="dropdown-item">
            <a  href="http://www.google.com" class="dropdown-item">a Alone - google</a>
          </li>
          <li>
            <a class="dropdown-item">Save Data</a>
          </li>
          <li class="disabled">
            <a class="dropdown-item">Fetch Data - disabled</a>
          </li>
          <a *ngIf="!auth.isAuthenticated()" [routerLink]="['user/login']">Login</a>
          <hr/>
          <li class="enabled">
            <a class="dropdown-item">Last Item </a>
          </li>
        </div>
      </ul>

  	`,
  styles: [` .navbar2 {
  display: flex;
  border: 1px solid transparent;
  background-color: #f8f8f8;
  border-color: #e7e7e7;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.navbar-right2 {
  float: right !important;
  margin-right: -15px;
}

.nav2 {
  float: left;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}
.nav2 > li {
  position: relative;
  display: inline-block;
}
.nav2 > li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
li:hover,
li:focus {
  text-decoration: none;
  background-color: #eee;
}

li.disabled > a {
  color: #999;
}

li.disabled:hover,
li.disabled:focus {
  color: #707;
  text-decoration: none;
  cursor: not-allowed;
  background-color: yellow;
}

/* dropdown */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown.show .dropdown-menu {
  display: block;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
} `]
})
export class AppMenuDropdown  { 
  name = 'Developers!'; 

}
