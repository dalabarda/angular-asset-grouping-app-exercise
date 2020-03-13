import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAsset } from './../shared/assets.model';

import { AssetService } from './../asset.service';
import { DataStorageService } from './../../shared/data-storage.service'; 

@Component({
	templateUrl: './asset-detail-create.component.html',
	styleUrls: ['./asset-detail-create.component.css'],
})

export class AssetDetailCreateComponent {
	today: number = Date.now();
	isDirty: boolean = true
	constructor(
    private router: Router,
    private http: HttpClient,
    private assetService:AssetService,
    private dataStorageService: DataStorageService) { 

	}
	
  // NOTE: OLD CODE - but I am going to keep it for a while...
  // // (ngSubmit)="saveAsset(newAssetForm.value)"
	// saveAsset(formValues: IAsset) {
	// 	console.log("-- Form Values: ", formValues)
  //   // here we can pass the formValues straight through 
  //   // since the shape of it exactly matches our event.model
	// 	this.assetService.saveAsset(formValues) 
	// 	this.router.navigate(['/assets'])
	// }

	cancel() {	// method from cancel
		this.router.navigate(['/assets'])
	}

  onCreatePost(postData: IAsset) {
    this.assetService.createAndStoreAsset(postData);
    setTimeout( () => {
      this.dataStorageService.fetchAssetsFromDb();
      this.assetService.getAssetsObs();
      this.router.navigate(['/assets']);
      },2000)
    // this.router.navigate(['/assets']);
  }

}