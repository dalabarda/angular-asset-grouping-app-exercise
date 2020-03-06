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

    // this.dataStorageService.fetchAssetsFromDb().subscribe((res: IAsset[]) => console.log(res));
    // this.fetchAssetPosts().forEach(item => { // ERROR -> FIX THIS
    //   console.log(item);
    // });
  }

  ngOnInit() {
    this.assets = this.assetService.getAssets();
    this.loadedAssets = []; // TODO:
    this.groups = this.assetService.getGroups();


    // array of arrays ordered by group.group_id
    this.groups.forEach(group => 
      this.assetsInGroups.push(
        this.assets.filter( asset => {
          var local = [];
          if(asset.group_id == group.id)
            return local.push(asset);
        })))

    this.groups.forEach(group => this.groupArr.push(group.id) )     
    this.globalService.currentMessage.subscribe((message: any) => this.itemClass = message)
  
    // TESTING
    // getting DUMMY data
    console.log(this.assetsInGroups)
    
    // testing the observable stream
    console.log(this.assetService.getAssetsObs());
  }

  private fetchAssetPosts() {
    this.assetService.fetchAssetsFromDb()
      .subscribe();
  }

}