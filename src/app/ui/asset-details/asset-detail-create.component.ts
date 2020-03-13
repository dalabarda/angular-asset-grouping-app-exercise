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
    
    this.subscriptions = new Subscription();

	}

	cancel() {	// method from cancel
		this.router.navigate(['/assets'])
	}

  // TOFIX: improve this post method
  async onCreatePost(postData: IAsset) {
    const one = await this.assetService.createAndStoreAsset(postData).toPromise();
    const two = from(this.router.navigate(['/assets'])).toPromise();

    Promise.all([one]).then(() => {
      this.dataStorageService.fetchAssetsFromDb().subscribe()
    }).then( () =>
      two
    )
  }

  private subscriptions:          Subscription;

  ngOnDestroy(): void{
      // super.ngOnDestroy();
      this.subscriptions.unsubscribe();
  }
}