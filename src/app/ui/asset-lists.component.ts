import { Component, Input } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { GlobalService } from './shared/global.service'
import { IAsset, IGroups } from './shared/index'



@Component({
  selector: 'asset-list',
  templateUrl: 'asset-lists.component.html',
  styleUrls:  ['asset-lists.component.css']
})

export class AssetListsComponent {
  private assets : IAsset[]
  private groups : IGroups[]
  private assetsInGroups: Array<T>;

  groupArr: any[];
  
  // switsch the class based on grid or list
  private itemClass:string;

  @Input('view') 
  viewClass: boolean;

// (click)="handleThumbnailClick(asset.name)"

  constructor(private assetService: AssetService,
              private globalService: GlobalService
              ){  
    this.groupArr = [];
    this.assetsInGroups = [];
  }

  ngOnInit() {
    this.assets = this.assetService.getAssets();
    this.groups = this.assetService.getGroups();
    

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


}


// https://scotch.io/tutorials/responsive-equal-height-with-angular-directive
        // <div *ngIf="itemClass == 'grid' 
        //           && (index) % 3 == 0 
        //           && (index) != 0"
        //           >hjghghhj
        //       </div>





// <div-line type="" >
//  
// 
// 
// 
// 
// 
// 
// 