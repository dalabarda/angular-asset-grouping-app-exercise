import { Component, OnInit, Output } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { GlobalService } from './shared/global.service'
import { ActivatedRoute } from '@angular/router'
import { IAsset } from './shared/index'

import { Subscription } from 'rxjs';


@Component({

  template: `
    <div class="well well-sm">
      <strong>Display: </strong>
      <div class="btn-group">
          <a (click)="newView('list')" id="list" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-th-list">
              </span>List</a> 
          <a (click)="newView('grid')" id="list" class="btn btn-default btn-sm"><span
              class="glyphicon glyphicon-th"></span>Grid</a>
      </div>
    </div>

  <thumbnail></thumbnail>

  `
 }) // 

export class EventsListComponent implements OnInit {
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