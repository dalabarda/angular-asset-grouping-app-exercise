import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { AssetService } from './shared/asset.service'


@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor( private assetService:AssetService) {  }

  resolve() {
    return this.assetService.getAssets().map(assets => assets)
  }



}