import { Component, OnInit, ViewChild} from '@angular/core'
import { AssetService } from './../shared/asset.service'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms' // anular forms items we needed to create a reactive form.
import { Router } from '@angular/router'

import { IAsset, IGroups, ISession } from './../shared/index'

@Component({
	templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css'],
 })

export class AssetDetailsComponent implements OnInit{
 
	assetForm: FormGroup
	group: FormControl
	addMode:boolean // important to pass data from a child to parent component.
	asset:IAsset
	selected:IGroups


	constructor(private assetService:AssetService, private route:ActivatedRoute, private router:Router) {
		// this.addMode = false;
	}

	ngOnInit() {
		this.asset = this.assetService.getAsset(+this.route.snapshot.params['id'])
		this.group = new FormControl('', Validators.required)

		this.assetForm = new FormGroup({
			group: this.group,
		})
	}
	
	// put us into an Add Mode
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


	 getDisplayedAsset():any {
	    if (this.asset && this.asset.type === 'jpg')
	      return { }
	    if (this.asset && this.asset.group_id === 2)
	      return {color: '#770000', 'font-weight': 'bold'}
	    return {}
  	}

	saveNewGroup(group:any) {
		// this.asset.groups.map(s => s.id)); // assigning new ID
		// group.id = nextId + 1
		console.log("Save new group: ", group, this)
		//this.asset.group.push(group)

		this.asset.name = group.name
		this.asset.group_id = group.id
		this.asset.modified = group.date
		this.asset.description = group.description

		this.assetService.updateAsset(this.asset)

		this.router.navigate(['/events'])
	}
}

/*
on our createSessionForm, the session ID on this is going to be undefined, 
so we need to assign a new session ID to this session when it comes in.
So we will get the max session ID off of the sessions on the event, and 
then increment it and assign that to our session ID.
*/