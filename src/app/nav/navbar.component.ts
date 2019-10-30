import { Component } from '@angular/core'
import { AuthService } from './../user/auth.service' // this component is to show the data from the 'user.model' 

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles: [`




  .navbar-nav2 {
  float: left;
  margin: 0px;
    }

  @media only screen and (max-width: 600px) {
    .navbar2 {
      background-color: lightblue;
    }
  }

  .navbar-right2 {
    float: right !important;
    margin-right: -15px;
  }


  @media (min-width: 768px) {
  .navbar-right .dropdown-menu {
    right: 0;
    left: auto;
  }
  .navbar-right .dropdown-menu-left {
    right: auto;
    left: 0;
  }
}

  .container-fluid2 {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  .nav2 {
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
  .nav2 > li > a:hover,
  .nav2 > li > a:focus {
    text-decoration: none;
    background-color: #eee;
  }
  .nav2 > li.disabled > a {
    color: #777;
  }
  .nav2 > li.disabled > a:hover,
  .nav2 > li.disabled > a:focus {
    color: #777;
    text-decoration: none;
    cursor: not-allowed;
    background-color: transparent;
  }


  .navbar-default2 {
    background-color: #f8f8f8;
    border-color: #e7e7e7;
  }



  .navbar2 {
    position: relative;
    min-height: 50px;
    margin-bottom: 20px;
    border: 1px solid transparent;
  }
  @media (min-width: 768px) {
    .navbar2 {
      border-radius: 4px;
    }
  }

  .navbar-brand2 {
    float: left;
    height: 50px;
    padding: 15px 15px;
    font-size: 18px;
    line-height: 20px;
  }
  .navbar-brand2:hover,
  .navbar-brand2:focus {
    text-decoration: none;
  }
  .navbar-brand2 > img {
    display: block;
  }

  `]
})
export class NavBarComponent {
	constructor(private auth: AuthService) {}
}