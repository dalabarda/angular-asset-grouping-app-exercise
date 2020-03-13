import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAsset } from './../shared/assets.model';
import { Subscription, Observable } from 'rxjs';

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
    
    this.subscriptions = new Subscription();

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

  // onCreatePost(postData: IAsset) {
  //   const promises: Promise<any> = new Promise(this.assetService.createAndStoreAsset(postData))
  //   return Promise.all([promises])
  //       .then(() => {
  //         this.router.navigate(['/assets']);
          
  //       })
  // }

  onCreatePost(postData: IAsset) {
    this.assetService.createAndStoreAsset(postData)
      // .then(() => 
      this.router.navigate(['/assets'])
      // )

  }

  private subscriptions:          Subscription;

  ngOnDestroy(): void{
      // super.ngOnDestroy();
      this.subscriptions.unsubscribe();
  }
}




  // onCreatePost(postData: IAsset) {
  //   this.assetService.createAndStoreAsset(postData);
  //   // updating the fetch data
  //   setTimeout( () => {
  //     this.subscriptions.add(this.dataStorageService.fetchAssetsFromDb().subscribe())
  //     },2400)
  //   // route back to main window 
  //   setTimeout( () => {
  //     this.router.navigate(['/assets']);
  //     },4000)
  // }