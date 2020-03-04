import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { AssetService } from './../shared/asset.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IAsset, IGroups } from './../shared/index';

@Component({
	templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.css'],
 })

export class GroupDetailComponent implements OnInit {

	private groups:     IGroups;
  private paramsSubscription: Subscription;

  // add here getters and setters

	constructor(
    private assetService: AssetService, 
    private route:        ActivatedRoute, 
    private router:       Router)
  {}


	ngOnInit() {
		this.groups = this.assetService.getGroups(+this.route.snapshot.params['id'])

    //
    this.paramsSubscription = this.route.params.subscribe( // params here is an Observable
      (params: IGroups) => {
        // gets the values from [routerLink]
        this.groups = this.assetService
          .getGroups(+params['id']); // '+' sign is used to convert 'id' to a number
      });

	}


	onCreating2NewGroup(group:any) {
    // TODO: 
		// this.asset.name = group.name;
		// this.asset.group_id = group.id;
		// this.asset.modified = group.date;
		// this.asset.description = group.description;

		// this.assetService.updateAsset(this.asset);

    // TODO: pop up a msg asking if wanna new group; or manage
    // if not, route it back to main window 
		// this.router.navigate(['/assets']);
	}



}