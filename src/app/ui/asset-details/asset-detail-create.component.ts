import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { AssetService, IAsset } from './../shared/index'


// REVISE THIS CODE: IT HAS 4 YEARS OLD

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
    private assetService:AssetService) { 

	}
	
  // // (ngSubmit)="saveAsset(newAssetForm.value)"
	// saveAsset(formValues: IAsset) {
	// 	console.log("-- Form Values: ", formValues)
  //   // here we can pass the formValues straight through 
  //   // since the shape of it exactly matches our event.model
	// 	this.assetService.saveAsset(formValues) 
	// 	this.isDirty = false
	// 	this.router.navigate(['/assets'])
	// }

	cancel() {	// method from cancel
		this.router.navigate(['/assets'])
	}

  onCreatePost(postData: IAsset) {
    // Send Http request 
    this.http.post(
      'https://asset-grouping-app-exercise.firebaseio.com/Assets'+ ".json", 
      {...postData})
      .subscribe(responseData => {
        console.log(responseData);
      });
    
    this.isDirty = false
		this.router.navigate(['/assets'])
  }


  // TODO:
  private fetchPosts() {
    this.http
      .get('')
      .subscribe(posts => {
      console.log(posts);
    });
  }
}