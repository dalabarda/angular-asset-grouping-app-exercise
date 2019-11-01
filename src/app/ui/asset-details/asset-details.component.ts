import { Component, OnInit, ViewChild} from '@angular/core'
import { AssetService } from '../shared/asset.service'
import { ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms' // anular forms items we needed to create a reactive form.
import { Router } from '@angular/router'

import { IAsset, IGroups, ISession } from '../shared/index'

@Component({
	templateUrl: './asset-details.component.html',
	styles: [`
		.container { padding-left:20px; padding-right:20px;}
		.asset-image { width: 100%; }
		a {cursor:pointer}



    .col-md-62 {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
        width: 50%;
    }

    @media (min-width: 992px) { 
      :col-md-62 {
        float: left;
      }
     }


    .btn-block2 {
      display: block;
      width: 100%;
    }


    .row2 {
      margin-right: -15px;
      margin-left: -15px;
    }

    .btn2 {
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

    .btn2:hover {
      color: cadetblue;
      background-color: #e6e6e6;
      border-color: #adadad;
      padding: 6px 12px;
      font-size: 12px;
      line-height: 1.5;
      border-radius: 3px;
    }


    .btn2:focus, .btn2.focus {
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }

    .btn2.disabled, .btn2:disabled {
      opacity: 0.65;
    }

    a.btn2.disabled,
    fieldset:disabled a.btn2 {
      pointer-events: none;
    }


    .btn-primary2 {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-primary2:hover {
      color: #fff;
      background-color: #0069d9;
      border-color: #0062cc;
    }

    .btn-primary2:focus, .btn-primary2.focus {
      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    }

    .btn-primary2.disabled, .btn-primary2:disabled {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    .btn-primary2:not(:disabled):not(.disabled):active, .btn-primary2:not(:disabled):not(.disabled).active,
    .show > .btn-primary2.dropdown-toggle {
      color: #fff;
      background-color: #0062cc;
      border-color: #005cbf;
    }

    .btn-primary2:not(:disabled):not(.disabled):active:focus, .btn-primary2:not(:disabled):not(.disabled).active:focus,
    .show > .btn-primary2.dropdown-toggle:focus {
      box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
    }


	`]

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