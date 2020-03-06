import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { AssetService } from './asset.service'

import { DataStorageService } from '../shared/data-storage.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(
    private dataStorageService: DataStorageService,
    private assetService:AssetService) {  }

  resolve() {
    // Load the data from the API here.
    const assets = this.assetService.getAssetsObs();
        if (assets.length === 0) {
      return this.dataStorageService.fetchAssetsFromDb();
    } else {
      return assets;
    }
  }



}