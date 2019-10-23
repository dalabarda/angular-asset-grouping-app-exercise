import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AssetService, IAsset } from './shared/index'

@Component({
	templateUrl: 'app/events/create-asset.component.html',
	styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
    .asset-image { width: 100%; }
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