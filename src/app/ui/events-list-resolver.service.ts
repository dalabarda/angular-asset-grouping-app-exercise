import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { AssetService } from './shared/asset.service'

/*
This is an injectable service that implements resolve. 
In a resolve method, we will typically make an asynchronous 
method call like an AJAX call and then when it returns, we'll return that data.

*/

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor( private assetService:AssetService) {

  }

  resolve() {
    return this.assetService.getAssets().map(assets => assets) 
    // this.assetService.getAssets().map(assets => assets)

}

/*
we are calling getEvents, which returns an observable and then we're
calling map on that observable, which gives us access to the events that are
passed in on that stream. 

*/
}