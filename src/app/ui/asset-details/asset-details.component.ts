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
 
	// we have to declare a form group here
	assetForm: FormGroup
	group: FormControl
	addMode:boolean // important to pass data from a child to parent component.
	asset:IAsset
	selected:IGroups


	constructor(private assetService:AssetService, private route:ActivatedRoute, private router:Router) {
		
	}

	ngOnInit() { // it is still not clear the all the benefits of using ngOnInit()...
		 this.asset = this.assetService.getAsset(+this.route.snapshot.params['id']) // pulling parameters off of the URL using the activated route service.
		
		// setting up each of our FormControls for each of our fields in here.
		this.group = new FormControl('', Validators.required)

		// now we have to build a form out of these fields...
		this.assetForm = new FormGroup({
			group: this.group,
		})
	}
	
	// put us into an Add Mode
	addGroup() {
		this.addMode = true // just going to toggle a flag on our component
	}

	closeGroup() {
		this.addMode = false // just going to toggle a flag on our component
	}


	// we are going to be passing the id of the asset in on the URL and we're going to want to pass that id in here.

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