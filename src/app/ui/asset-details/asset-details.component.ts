import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { AssetService } from './../shared/asset.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { IAsset, IGroups, ISession } from './../shared/index';

@Component({
	templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
 })

export class AssetDetailsComponent implements OnInit, OnDestroy {
 
	private addMode:   boolean; // important to pass data from a child to parent component.
	private asset:     IAsset;
	private selected:  IGroups;
  private paramsSubscription: Subscription;
  private testObsSubscription: Subscription;
  
  // add here getters and setters

	constructor(
    private assetService: AssetService, 
    private route:        ActivatedRoute, 
    private router:       Router){}


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
    // this.testObsSubscription.unsubscribe();
  }
	

	addGroup() {
		this.addMode = !this.addMode // just going to toggle a flag on our component
	}

	closeGroup() {
		this.addMode = false // just going to toggle a flag on our component
	}

	cancelAddSession() {
		this.addMode = false
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
		// this.asset.groups.map(s => s.id)); // assigning new ID
		// group.id = nextId + 1
		//this.asset.group.push(group)

		this.asset.name = group.name;
		this.asset.group_id = group.id;
		this.asset.modified = group.date;
		this.asset.description = group.description;

		this.assetService.updateAsset(this.asset);
		this.router.navigate(['/assets']);
	}


}



// read more about Query Params and Fragments