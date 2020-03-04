import { Component, Input } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { GlobalService } from './shared/global.service'
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
              private globalService: GlobalService,
              private http: HttpClient,
              ){  
    this.groupArr = [];
    this.assetsInGroups = [];
  }

  ngOnInit() {
    this.assets = this.assetService.getAssets();
    this.loadedAssets = []; // TODO:
    this.groups = this.assetService.getGroups();
    this.fetchAssetPosts();

    // array of arrays ordered by group.group_id
    this.groups.forEach(group => 
      this.assetsInGroups.push(
        this.assets.filter( asset => {
          var local = [];
          if(asset.group_id == group.id)
            return local.push(asset);
        })))

    console.log(this.assetsInGroups)

    // TODO: read more about route snapshot
    // this.events = this.route.snapshot.data['events'] // 

    this.groups.forEach(group => this.groupArr.push(group.id) )
     
    this.globalService.currentMessage.subscribe(message => this.itemClass = message)
  
  }

  private fetchAssetPosts() {
    const assetList = this.assetService.fetchAssetsFromDb();
  }
}