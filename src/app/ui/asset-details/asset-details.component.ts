import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { AssetService } from './../shared/asset.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { IAsset, IGroups, ISession } from './../shared/index';

@Component({
	templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
 })

export class AssetDetailsComponent implements OnInit, OnDestroy {
 
	private addMode:   boolean; // important to pass data from a child to parent component.
	private asset:     IAsset;
	private assetForm: FormGroup;
	private group:     FormControl;
	private selected:  IGroups;
  paramsSubscription: Subscription; 
// add here getters and setters

  testId = 3;

	constructor(
    private assetService: AssetService, 
    private route:        ActivatedRoute, 
    private router:       Router){}


	ngOnInit() {
		this.asset = this.assetService.getAsset(+this.route.snapshot.params['id'])
		this.group = new FormControl('', Validators.required)

		this.assetForm = new FormGroup({
			group: this.group,
		});

    //
    this.paramsSubscription = this.route.params.subscribe(
      (params: IAsset) => {
        // gets the values from [routerLink]
        this.asset = this.assetService
          .getAsset(+params['id']); // '+' sign is used to convert 'id' to a number
      });

	}

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
  /* this.route.params
   *    -> params here is an Observable (in this case, Route Observables), 
   *    which are features taht allows you to work with async tasks.
  */

	
	addGroup() {
		this.addMode = !this.addMode // just going to toggle a flag on our component
	}

	closeGroup() {
		this.addMode = false // just going to toggle a flag on our component
	}

	cancelAddSession() {
		this.addMode = false
	}

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

	saveNewGroup(group:any) {
		// this.asset.groups.map(s => s.id)); // assigning new ID
		// group.id = nextId + 1
		console.log("Save new group: ", group, this)
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