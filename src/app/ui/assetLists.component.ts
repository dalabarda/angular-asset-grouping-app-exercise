import { Component, Input } from '@angular/core'
import { AssetService, GroupService } from './shared/asset.service'
import { GlobalService } from './shared/global.service'
import { IAsset, IGroups } from './shared/index'



@Component({
  selector: 'asset-list',
  template: `
  
    <div *ngFor="let test of testArr">
      <h2 style="font-weight:bold">Assets from group {{ test }}: </h2>
      <hr/>
        <div class="cont">
          <div *ngFor="let asset of assetsInGroups[test-1]" 
            [ngClass]="itemClass" >
            <asset-item
              *ngIf="asset.group_id== test"  
              
              [asset]="asset">
            </asset-item>
          </div>
        </div>
    </div>
  
  `,
  styles: [`
    .cont {
      background-color: yellow;
          display: table; /* Make the container element behave like a table */
    width: 100%; /* Set full-width to expand the whole page */
    }

    .grid {
      display: table-cell; /* Make elements inside the container behave like table cells */
      background-color: magenta;
      width: 300px;
      margin: 0px;
    }

    .list {
      background-color: cyan;
      min-height: 75px;
      // height: 100%;
      // width: 100%;
    }



  `] // '!important' otherwise, this style will get overridden by another one.
})
export class AssetListsComponent {
  private assets : IAsset[]
  private groups : IGroups[]
  private assetsInGroups: Array<T>;

  testArr: any[];
  
  // switsch the class based on grid or list
  private itemClass:string;

  @Input('view') 
  viewClass: boolean;

// (click)="handleThumbnailClick(asset.name)"

  constructor(private assetService: AssetService,
              private globalService: GlobalService
              ){  
    this.testArr = [];
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

    this.groups.forEach(i => this.testArr.push(i.id) )

      
    this.globalService.currentMessage.subscribe(message => this.itemClass = message)
  
  }


}


