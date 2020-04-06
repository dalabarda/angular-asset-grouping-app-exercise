import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms' // anular forms items we needed to create a reactive form.
import { restrictedWords3 } from '../../shared/index';
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

import { AssetService } from './../asset.service';
import { IAsset, IGroups } from './../index';

@Component({
	selector: 'move-group',
	templateUrl: './asset-detail-edit.component.html',
	styles: [`
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }

    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}

    input, select, textarea {
      -ms-box-sizing:content-box;
      -moz-box-sizing:content-box;
      -webkit-box-sizing:content-box; 
      box-sizing:content-box;
      width: 80%;
      padding: 0px;
      border-width: 1px;
    }

    textarea {
      height: 150px;
    }

  input.ng-invalid.ng-touched {
    border: 1px solid red;
  }

  `]
})

export class AssetDetailEditComponent implements OnInit {
  
  private _asset:IAsset;
  private _arr: number;
	private description: FormControl;
	private g_id: FormControl;
  private groupArr: number[]; // array of group ids data
	private editAssetForm: FormGroup;
	private name: FormControl;
  private today = Date.now();
	private updated: FormControl;
	private forbiddenUserNames = ['jhon', 'max', 'dan', 'theo', 'mary']
  changedSaved = false;

  // emit a message back to our parent component when the user clicks save.
	@Output() movingToNewGroup: EventEmitter<IGroups> = new EventEmitter<IGroups>();
	@Output() cancelChangeGroup: EventEmitter<boolean> = new EventEmitter<boolean>();
	
  
  @Input()
  get asset(): IAsset { return this._asset; }
  set asset(value: IAsset) { this._asset = value || {};}

  get assetDescription() {
     return this.editAssetForm.get('description');
  }


	constructor( private assetService: AssetService, 
               private route:ActivatedRoute, 
               private router:Router){}


	ngOnInit() {
		// setting up each of our FormControls for each of our fields in here.
		this.name = new FormControl('', Validators.required)
		this.g_id = new FormControl('', Validators.required)
		this.updated = new FormControl(this.today)
		this.description = new FormControl('', [Validators.required,
											Validators.maxLength(400), // TOFIX: maxLength breaks the validator
											 // imported from shared folder, thus it doesn't need the 'this' keyword
											restrictedWords3(['dismiss', 'fired', 'quit', 'abandon', 'abdicate']),
                      // TODO: read more why bind() is necessary
                      // this.forbiddenNames.bind(this)
											])

    // groups gathered from a service
    this.groupArr = [];
    this.assetService.getGroups().forEach((item: IGroups) => {
      this.groupArr.push(item.id);
    }) //[1, 2, 3]; 
		
		// now we have to build a form out of previous fields.
	 	this.editAssetForm = new FormGroup({
			name: this.name,
			g_id: this.g_id,
			updated: this.updated,
			description: this.description
		})
	 	
	 	// console.log("--->", this.groupArr)
	}


	saveSession(formValues: any) {
		// TOFIX: data is not consistent. data should be last modification date
		let group:IGroups = {
			id: +formValues.g_id, // casting into a number 1, 2 ou 3
			name: formValues.name,
			date: this.today, // this must be timestamped. 
			description: formValues.description,
		}

     // now we have an output parameter to bind to, 
     // now we just have to bind it to our event details page.
		 this.movingToNewGroup.emit(group) 
	}

  // On cancel button collapses the edit component. 
  // No reset of form values are applied.
	onCancelClick() {
		this.cancelChangeGroup.emit();
	}

  // TODO: nice to have but not important feature. reset to default values. 
	// onResetlClick() {
	// 	this.cancelChangeGroup.emit(console.log('thaaaaaaaaaaat')) // 
	// }

  onInvalidDescription():string {
    if(this.description.invalid && this.description.dirty) {
      if(this.description.errors.required)
        return 'required'
      // if(this.description.errors.maxLength) // TOFIX: maxLength is broken
      //   return 'required'
      if(this.description.errors.restrictedWords.split(', ').length == 1)
        return this.description.errors.restrictedWords + ' is a forbiden word ;)'
      if(this.description.errors.restrictedWords.split(', ').length > 1)
        return this.description.errors.restrictedWords + ' are forbiden words ;)'
      else
        return null
    }
    // else
      return null;
  }

  // TOFIX: alternatively
  // forbiddenNames(control: FormControl): {[s: string]: boolean} {
  //   if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
  //     return {'nameIsForbidden': true};
  //   }
  //   return null;
  // }

  onDeleteBtnClick() {
    
  }

  onUpdateSaved() {
    this.changedSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }
} 
