import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px; }

    .col-md-42 {
      position: relative;
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;

      -ms-flex: 0 0 33.333333%;
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .form-group2 {
      margin-bottom: 1rem;
    }

    .form-inline .form-group {
      display: -ms-flexbox;
      display: flex;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      -ms-flex-align: center;
      align-items: center;
      margin-bottom: 0;
    }

    .form-control2 {
      display: block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .form-control2 {
        transition: none;
      }
    }

    textarea.form-control2 {
      height: auto;
    }


    .btn2 {
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    @media (prefers-reduced-motion: reduce) {
      .btn2 {
        transition: none;
      }
    }

    .btn2:hover {
      color: #212529;
      text-decoration: none;
    }

    .btn2:focus, .btn2.focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .btn2.disabled, .btn2:disabled {
      opacity: 0.65;
    }

    a.btn2.disabled,
    fieldset:disabled a.btn2 {
      pointer-events: none;
    }

    .btn-primary2 {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-primary2:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }

    .btn-primary2:focus, .btn-primary2.focus {
      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    }

    .btn-primary2.disabled, .btn-primary2:disabled {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-primary2:not(:disabled):not(.disabled):active, .btn-primary2:not(:disabled):not(.disabled).active,
    .show > .btn-primary2.dropdown-toggle {
      color: #fff;
      background-color: #0062cc;
      border-color: #005cbf;
    }

    .btn-primary2:not(:disabled):not(.disabled):active:focus, .btn-primary2:not(:disabled):not(.disabled).active:focus,
    .show > .btn-primary2.dropdown-toggle:focus {
      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    }

  `]
})
export class LoginComponent {
    constructor(private authService:AuthService, private router:Router) {

    }

    login(formValues: any) {
      this.authService.loginUser(formValues.userName, formValues.password)
      this.router.navigate(['events'])
    }

    cancel() {
      this.router.navigate(['events'])
  }
}