import { Component } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { IAsset } from './shared/index'



@Component({
  selector: 'list',
  template: `
  <h2 style="font-weight:bold">Assets from group 1: </h2>
    <hr/>
      <div class="row">
        <div *ngFor="let asset of assets">
          <asset-thumbnail *ngIf="asset.group_id==1" class="col-md-12" (click)="handleThumbnailClick(asset.name)" [asset]="asset"></asset-thumbnail>
        </div>
      </div>

  <h2 style="font-weight:bold">Assets from group 2: </h2>
    <hr/>
      <div class="row">
        <div *ngFor="let asset of assets">
          <asset-thumbnail *ngIf="asset.group_id==2" class="col-md-12" (click)="handleThumbnailClick(asset.name)" [asset]="asset"></asset-thumbnail>
        </div>
      </div>

  <h2 style="font-weight:bold">Assets from group 3: </h2>
    <hr/>
      <div class="row">
        <div *ngFor="let asset of assets">
          <asset-thumbnail *ngIf="asset.group_id==3" class="col-md-12" (click)="handleThumbnailClick(asset.name)" [asset]="asset"></asset-thumbnail>
        </div>
      </div>
  `,
  styles: [`
    .thumbnail { min-height: 250px; }
    .pad-left { margin-left: 10px; }
    .text { font-size: 80%; }
    .well div { color: #bbb;}
  `] // '!important' otherwise, this style will get overridden by another one.
})
export class ListComponent {
assets : IAsset[]   // this is just creating a property called event and telling TypeScript that it is of type any.
addMode:boolean


  constructor(private assetService: AssetService, 
             
              ){


      // it is not a good idea to put 'this' and other things into the constructor that are
      // potentially long-running and eventually this will be an AJAX call, and so this will
      // take a little while to fetch those events. 

      // the best thing to do is hooking into a lifecycle hook and one of those is the ngOnInit method,
  }

  ngOnInit() {
    // this.events = this.route.snapshot.data['events'] // 
    
    this.assets = this.assetService.getAssets()
  }


}


