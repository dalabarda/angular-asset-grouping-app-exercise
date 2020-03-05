import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssetService } from './../ui/shared/asset.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient,
              private assetService: AssetService){}

  storeAssets(assets: any[]) {
    // 
  }
  
}