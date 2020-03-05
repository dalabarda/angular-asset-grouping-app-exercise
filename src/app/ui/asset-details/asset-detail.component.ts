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

export class AssetDetailComponent implements OnInit, OnDestroy {
 
	private editToggleComp:     boolean;
	private asset:              IAsset;
  private paramsSubscription: Subscription;
  private old_asset = {...this.assetService.getAsset(+this.route.snapshot.params['id'])};
  

	constructor(
    private assetService: AssetService, 
    private route:        ActivatedRoute, 
    private router:       Router)
  {}


	ngOnInit() {
		this.asset = this.assetService.getAsset(+this.route.snapshot.params['id'])

    //
    this.paramsSubscription = this.route.params.subscribe( // params here is an Observable
      (params: IAsset) => {
        // gets the values from [routerLink]
        this.asset = this.assetService
          .getAsset(+params['id']); // '+' sign is used to convert 'id' to a number
      });

	}

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }


	onToggleEditComponent() {
		this.editToggleComp = !this.editToggleComp;
	}

  //TODO revise this code. this should be refactored
	@ViewChild('videoPlayer') videoplayer: any;
	toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
	}


	 getDisplayedAsset():any { // TODO
	    if (this.asset && this.asset.type === 'jpg')
	      return { }
	    if (this.asset && this.asset.group_id === 2)
	      return {color: '#770000', 'font-weight': 'bold'};
	    return {}
  	}

	onMovingAsset2NewGroup(group:any) {

		this.asset.name = group.name;
		this.asset.group_id = group.id;
		this.asset.modified = group.date;
		this.asset.description = group.description;

		this.assetService.updateAsset(this.asset);
		this.router.navigate(['/assets']);
	}

  onPassingAsset() {
    // shallow copy is ok here because there is no nested object
    // in case of deep copy, use JSON.stringify and JSON.parse
    return this.old_asset;
  }

  onToggleCancelButtom(test) {
    console.log(test);
  }
}