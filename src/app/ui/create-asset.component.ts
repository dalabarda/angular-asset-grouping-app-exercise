import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AssetService, IAsset } from './shared/index'


// REVISE THIS CODE: IT HAS 4 YEARS OLD

@Component({
	templateUrl: './create-asset.component.html',
	styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
    .asset-image { width: 100%; }

    .col-md-62 {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        width: 50%;
    }

    @media (min-width: 992px) { 
      :col-md-62 {
        float: left;
      }
     }

     .form-group2 {
        margin-bottom: 15px;
        margin-right: -15px;
        margin-left: -15px;
     }

    @media (min-width: 768px) { 
      .form-group2 {
        margin-bottom: 0;
        vertical-align: middle;
      }
    }

    @media (max-width: 767px) { 
      .form-group2 {
        margin-bottom: 0;
        vertical-align: middle;
      }

      .form-group2:last-child {
        margin-bottom: 0;
      }
    }





    .form-control2 {
      display: block;
      width: 100%;
      height: 34px;
      padding: 6px 12px;
      font-size: 14px;
      line-height: 1.42857143;
      color: #555;
      background-color: #fff;
      background-image: none;
      border: 1px solid #ccc;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
              box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
      -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
          -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
              transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
    }
    .form-control2:focus {
      border-color: #66afe9;
      outline: 0;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
              box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
    }
    .form-control2::-moz-placeholder {
      color: #999;
      opacity: 1;
    }
    .form-control2:-ms-input-placeholder {
      color: #999;
    }
    .form-control2::-webkit-input-placeholder {
      color: #999;
    }
    .form-control2::-ms-expand {
      background-color: transparent;
      border: 0;
    }




    fieldset[disabled] .form-control2 {
      background-color: #eee;
      opacity: 1;
    }
    .form-control[disabled],
    fieldset[disabled] .form-control2 {
      cursor: not-allowed;
    }
    textarea.form-control2 {
      height: auto;
    }





    .btn-primary2 {
      color: #fff;
      background-color: #337ab7;
      border-color: #2e6da4;
    }
    .btn-primary2:focus,
    .btn-primary2.focus {
      color: #fff;
      background-color: #286090;
      border-color: #122b40;
    }
    .btn-primary2:hover {
      color: #fff;
      background-color: #286090;
      border-color: #204d74;
    }
    .btn-primary2:active,
    .btn-primary2.active,
    .open > .dropdown-toggle.btn-primary2 {
      color: #fff;
      background-color: #286090;
      border-color: #204d74;
    }





    .btn-default2 {
      color: #333;
      background-color: #fff;
      border-color: #ccc;
    }
    .btn-default2:focus,
    .btn-default2.focus {
      color: #333;
      background-color: #e6e6e6;
      border-color: #8c8c8c;
    }
    .btn-default2:hover {
      color: #333;
      background-color: #e6e6e6;
      border-color: #adadad;
    }

  `]
})

export class CreateAssetComponent {
	today: number = Date.now();
	isDirty: boolean = true
	constructor(private router: Router, private assetService:AssetService) { 

	}
	
	saveAsset(formValues: IAsset) {
		console.log("-- Form Values: ", formValues)
		this.assetService.saveAsset(formValues) // here we can pass the formValues straight through since the shape of it exactly matches our event.model
		this.isDirty = false
		this.router.navigate(['/events'])
	}

	cancel() {	// method from cancel
		this.router.navigate(['/events'])
	}
}