import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IAsset } from './../shared/assets.model';
import { Subscription, Observable, concat, from } from 'rxjs';

import { AssetService } from './../asset.service';
import { DataStorageService } from './../../shared/data-storage.service'; 

import { take, publish } from 'rxjs/operators';

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

	cancel() {	// method from cancel
		this.router.navigate(['/assets'])
	}

  // // ALTERNATIVE 1: async / await
  // async onCreatePost(postData: IAsset) {
  //   await this.assetService.createAndStoreAsset(postData).toPromise();
  //   this.router.navigate(['/assets']);
  // }

  // ALTERNATIVE 2: Using then()
  onCreatePost(postData: IAsset) {
    this.assetService.createAndStoreAsset(postData).toPromise()
      .then(() => {
        this.router.navigate(['/assets']);
      })
      .catch(err => console.log(err));
  }

}

// IDEAS ///////////
// // shallow copy of arrays and objs
// var obj = Object.assign({}, OrgObj);
// var arr = OrgArr.slice();
// var arr = Array.from(OrgArr);


// // deep copy, but only for valid JSON values. 
// // no copy of functions
// var cloneObj = JSON.parse(JSON.stringify(origObj)) 

// // add an item to the new obj
// cloneObj.cookie = 'chocolate chip';