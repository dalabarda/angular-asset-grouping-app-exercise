import { Component, OnInit } from '@angular/core'
import { AssetService } from './shared/asset.service'
import { ActivatedRoute } from '@angular/router'
import { IAsset } from './shared/index'

@Component({

  template: `
    <div class="well well-sm">
      <strong>Display: </strong>
      <div class="btn-group">
          <a (click)="displayList()" id="list" class="btn btn-default btn-sm">
              <span class="glyphicon glyphicon-th-list">
              </span>List</a> 
          <a (click)="displayGrid()" id="grid" class="btn btn-default btn-sm"><span
              class="glyphicon glyphicon-th"></span>Grid</a>
      </div>
    </div>

  <thumbnail *ngIf="!addMode" ></thumbnail>
  <list *ngIf="addMode" ></list>

  `
 }) // 

export class EventsListComponent implements OnInit {
assets:IAsset[]
addMode:boolean // important to pass data from a child to parent component.

  constructor(private assetService: AssetService, 
              private route:ActivatedRoute
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


  displayList() {
    this.addMode = false
  }

  displayGrid() {
    this.addMode = true
  }



  // handleThumbnailClick(assetName) {
  //   toastr.success(assetName)
  // }

  // I don't know why I have problens loading this toastr. 
}