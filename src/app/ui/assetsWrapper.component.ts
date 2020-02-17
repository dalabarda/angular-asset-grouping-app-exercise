import { Component, OnInit, Output } from '@angular/core';
import { AssetService } from './shared/asset.service';
import { GlobalService } from './shared/global.service';
import { ActivatedRoute } from '@angular/router';
import { IAsset } from './shared/assets.model';

import { Subscription } from 'rxjs';

@Component({

  template: `

    <div class="menu-bar">
      <strong>Display: </strong>
      <div class="button-group">
          <button (click)="newView('list')" id="list" class="button">
              <span class="fas fa-bars"></span>
              List
          </button> 
          <button (click)="newView('grid')" id="list" class="button"><span
              class="fas fa-th"></span> Grid
          </button>
      </div>
    </div>

  <asset-list></asset-list>

  `,
  styles: [`

    .menu-bar {
      padding: 9px;
      border-radius: 1px;
      min-height: 20px;
      padding: 19px;
      margin-bottom: 20px;
      background-color: #f5f5f5;
      border: 1px solid #e3e3e3;
      border-radius: 4px;
      -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);
    }

    .button-group {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      color: #333;
      background-color: #fff;
    }

    .button {
      color: #333;
      padding: 6px 12px;
      font-size: 12px;
      line-height: 1.5;
      background-color: #fff;
      border-color: #ccc;
      white-space: nowrap;
      cursor: pointer;
      background-image: none;
      border: 1px solid #ccc;
    }

    .button:hover {
      color: cadetblue;
      background-color: #e6e6e6;
      border-color: #adadad;
      padding: 6px 12px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }

  `]
 }) // 

export class AssetsWrapperComponent implements OnInit {
  assets:IAsset[]

  toggle:string;


  constructor(private assetService: AssetService,
              private globalService: GlobalService, 
              private route:ActivatedRoute
              ){  }


  ngOnInit(): void {
    // TODO:
    // this.events = this.route.snapshot.data['events'] // 
    this.assets = this.assetService.getAssets()
    this.globalService.currentMessage.subscribe(message => this.toggle = message)
  }

  // TODO: implement once again TOASTR
  // handleThumbnailClick(assetName) {
  //   toastr.success(assetName)
  // }

  newView(str: string) {
    this.globalService.changeMessage(str)
  }
}