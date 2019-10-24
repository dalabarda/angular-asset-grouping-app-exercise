import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { AssetService } from './shared/asset.service'

// THIS MIGHT BE DEPRECATED: this project was done when angular 2 was release.

/*
This is an injectable service that implements resolve. 
In a resolve method, we will typically make an asynchronous 
method call like an AJAX call and then when it returns, we'll return that data.

*/

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor( private assetService:AssetService) {  }

  resolve() {
    return this.assetService.getAssets().map(assets => assets) 
    // this.assetService.getAssets().map(assets => assets)

  }



}