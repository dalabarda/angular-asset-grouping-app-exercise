import { Component } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { IAsset, IGroups } from './shared/index'



@Component({
  selector: 'thumbnail',
  template: `

    <h2 style="font-weight:bold">Assets from group 1: </h2>
    <hr/>
      <div>
        <div *ngFor="let asset of assets" class="g">
          <asset-thumbnail 
            *ngIf="asset.group_id==1"  
            (click)="handleThumbnailClick(asset.name)" 
            [asset]="asset">
          </asset-thumbnail>
        </div>
      </div>

    <h2 style="font-weight:bold">Assets from group 2: </h2>
    <hr/>
      <div>
        <div *ngFor="let asset of assets" class="grid-item g">
          <asset-thumbnail 
            *ngIf="asset.group_id==2"  
            (click)="handleThumbnailClick(asset.name)" 
            [asset]="asset"></asset-thumbnail>
        </div>
      </div>

    <h2 style="font-weight:bold">Assets from group 3: </h2>
    <hr/>
      <div class="row">
        <div *ngFor="let asset of assets" class="grid-item g">
          <asset-thumbnail 
            *ngIf="asset.group_id==3" 
            (click)="handleThumbnailClick(asset.name)" 
            [asset]="asset">
          </asset-thumbnail>
        </div>
      </div>
  `,
  styles: [`

    :host {
	    display: block;
    }

    .g {
      display: inline-block;
    }


  `] // '!important' otherwise, this style will get overridden by another one.
})
export class ThumbnailComponent {
assets : IAsset[]   // this is just creating a property called event and telling TypeScript that it is of type any.
groups : IGroups[]                            // we don't care for now, what data type is. 

                            // the Imput() decorator tells Angular that this event will be passed in from another component


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


