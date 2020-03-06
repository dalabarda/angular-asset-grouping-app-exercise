import { Component, Input } from '@angular/core'
import { AssetService } from './asset.service'
import { GlobalService } from './../shared/global.service'
import { DataStorageService } from './../shared/data-storage.service'
import { IAsset, IGroups } from './shared/index'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Component({
  selector: 'asset-list',
  templateUrl: 'asset-lists.component.html',
  styleUrls:  ['asset-lists.component.css']
})

export class AssetListsComponent {
  private assets : IAsset[]
  private assetsObs:           IAsset;
  private loadedAssets : IAsset[]
  private groups : IGroups[]
  private assetsInGroups: Array<T>;

  groupArr: any[];
  
  // switsch the class based on grid or list
  private itemClass:string;

  @Input('view') 
  viewClass: boolean;

// (click)="handleThumbnailClick(asset.name)"

  constructor(private assetService: AssetService,
              private dataStorageService: DataStorageService,
              private globalService: GlobalService,
              private http: HttpClient,
              ){  
    this.groupArr = [];
    this.assetsInGroups = [];
    this.assetsObs = [];

  }

  ngOnInit() {
    this.assets = this.assetService.getAssets(); // get from Db
    this.groups = this.assetService.getGroups();
    this.loadedAssets = []; // TODO:
    this.assetsObs = this.assetService.getAssetsObs(); // '+' sign is used to convert params to a number

    // array of arrays ordered by group.group_id
    this.groups.forEach(group => 
      this.assetsInGroups.push(
        this.assetsObs.filter( asset => {
          var local = [];
          if(asset.group_id == group.id)
            return local.push(asset);
        })))

    this.groups.forEach(group => this.groupArr.push(group.id))     
    this.globalService.currentMessage.subscribe((message: any) => this.itemClass = message)
  
    // TESTING
    // getting DUMMY data
    console.log(this.assetsInGroups)
    
    // testing the observable stream
    console.log(this.assetService.getAssetsObs());

    console.log(this.assetsObs);
  }

}