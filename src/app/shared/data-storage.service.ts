import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetService } from './../ui/shared/asset.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient,
              private assetService: AssetService){}

  storeAssets() {
    const assets = this.assetService.getAssets();

    // put overwride all data that are in a node
    this.http.put('https://asset-grouping-app-exercise.firebaseio.com/testingPut.json', 
    assets)
    .subscribe(res => {
      console.log(res);
    });
  }
  
  fetchAssets() {
    this.http.get('https://asset-grouping-app-exercise.firebaseio.com/testingPut.json')
    .subscribe(res => {
      c
    });
  }
}



/*
in asset-lists.component

  setAssets(assets: IAsset[]) {
    this.assets = assets;
    this.assetsChanged.next(this.assets.slice());
  }


*/