import { Component, Input } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { IAsset, IGroups } from './shared/index'



@Component({
  selector: 'thumbnail',
  template: `

    <h2 style="font-weight:bold">Assets from group 1: </h2>
    <hr/>
      <div>
        <div *ngFor="let asset of assets">
          <asset-thumbnail 
            
            *ngIf="asset.group_id==1"  
            (click)="handleThumbnailClick(asset.name)" 
            [asset]="asset">
          </asset-thumbnail>
        </div>
      </div>

    <h2 style="font-weight:bold">Assets from group 2: </h2>
    <hr/>
      <div class="gg">
        <div *ngFor="let asset of assets" class="g">
          <asset-thumbnail 
            *ngIf="asset.group_id==2"  
            (click)="handleThumbnailClick(asset.name)" 
            [asset]="asset">
          </asset-thumbnail>
        </div>
      </div>

    <h2 style="font-weight:bold">Assets from group 3: </h2>
    <hr/>
      <div class="gg">
        <div *ngFor="let asset of assets" class="g">
          <asset-thumbnail 
            *ngIf="asset.group_id==3" 
            (click)="handleThumbnailClick(asset.name)" 
            [asset]="asset">
          </asset-thumbnail>
        </div>
      </div>
  `,
  styles: [`

    .list-item {
      padding: 19px;
      background-color: #f5f5f5;
      border: 1px solid #e3e3e3;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    }

    .list-item:hover {
      background-color: #E6E6E6;
      cursor: pointer;
    }



    .gg {
	    display: -webkit-inline-box;
    }

    .g {
      max-width: 300px;
    }

    .grid {
      width: 800px;
    }

    .list {
      width: 300px;
    }

  `] // '!important' otherwise, this style will get overridden by another one.
})
export class ThumbnailComponent {
  assets : IAsset[]   // this is just creating a property called event and telling TypeScript that it is of type any.
  groups : IGroups[]

  @Input('view') 
  viewClass: boolean;

  get changeItemClass(): string {
      return this.viewClass ? 'list' : 'grid';
  }

  constructor(private assetService: AssetService, 
             
              ){  }

  ngOnInit() {
    // this.events = this.route.snapshot.data['events'] // 
    
    this.assets = this.assetService.getAssets()
  }



}


