import { Component, Input } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { GlobalService } from './shared/global.service'
import { IAsset, IGroups } from './shared/index'



@Component({
  selector: 'asset-list',
  template: `
  
    <div *ngFor="let group of groupArr" class="container">
      <h2 style="font-weight:bold">Assets from group {{ group }}: </h2>
      <hr/>
        <div class="cont">

          <div 
            *ngFor="let asset of assetsInGroups[group-1]" 
            [routerLink]="['/events', asset.id]"
            [ngClass]="itemClass">

              <asset-item 
                [asset]="asset">
              </asset-item>
          
          </div>
        </div>
    </div>
  
  `,
  styles: [`
    .cont {
      background-color: yellow;
      width: 100%;
      height: 100%;
    }

    .grid > asset-item {
      height: 200px;
      width: 100%;
    }

    .grid {
      display: inline-flex; /* Make elmnts within container behave like table cells */
      background-color: magenta;
      width: calc((100% / 3) - 4px);  /* 4 is for the dotted line */
      height: 100%;
      
      border: 3px dashed;
      border-left: none;
      border-bottom: none;
      
    }

    .grid:hover {
      background-color: red;
      cursor: pointer;
    }

    .grid:nth-child(3n+1) {
      border-left: dashed; 
    }

    .grid:nth-last-child(1),
    .grid:nth-last-child(2),
    .grid:nth-last-child(3) {
      border-bottom: 3px dashed;
      margin-top: -3px;
    }


    .list {
      background-color: cyan;
      min-height: 75px;
      
    }

    .list:hover {
      background-color: red;
      cursor: pointer;
    }

    .container {
      margin-top: 20px;
    }

  `] // '!important' otherwise, this style will get overridden by another one.
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