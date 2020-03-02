import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms' // anular forms items we needed to create a reactive form.
import { IGroups, IAsset, AssetService, restrictedWords3 } from '../shared/index'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router'

@Component({
	selector: 'move-group',
	templateUrl: './move-group.component.html',
	styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }

  `]
})

export class MoveGroupComponent implements OnInit {
	//we just need to create an output parameter for our parent component to bind to.
	// emit a message back to our parent component when the user clicks save.
	@Output() movingToNewGroup: EventEmitter<IGroups> = new EventEmitter<IGroups>()
	@Output() cancelChangeGroup = new EventEmitter() 
	


	// we have to declare a form asset here
	@Input() private asset:IAsset;

	private description: FormControl;
	private g_id: FormControl;
  private groupArr: number[];
	private newGroupForm: FormGroup;
	private name: FormControl;
  private today = Date.now();
	private updated: FormControl;


	constructor( private assetService: AssetService, 
               private route:ActivatedRoute, 
               private router:Router){}


	ngOnInit() {
		// setting up each of our FormControls for each of our fields in here.
		this.name = new FormControl('', Validators.required)
		this.g_id = new FormControl('', Validators.required)
		this.updated = new FormControl(this.today)
		this.description = new FormControl('', [Validators.required, 
											Validators.maxLength(400),
											this.restrictedWords, // custom validator applyed to the abstract field
											this.restrictedWords2(['foo', 'bar']), // more complex functionning custom validators. 
											restrictedWords3(['dismiss', 'fired', 'quit', 'abandon', 'abdicate']) // this is imported from another file in shared folder, therefore it doesn't need the 'this' keyword
											])

    // TODO: this should be dynamic and gathered from a service
    this.groupArr = [1, 2, 3]; 
		
		// now we have to build a form out of these fields...
	 	this.newGroupForm = new FormGroup({
			name: this.name,
			g_id: this.g_id,
			updated: this.updated,
			description: this.description
		})
	 	
	 	console.log("--->", this.asset)
	}

	// creating CUSTOM VALIDATORS: prevent certain words from being used in a field and then we'll 
	// apply that validator to this abstract field. Validators are functions that returns null if the controll
	// is valid or an error object if it's invalid. 
	
	// this function returns an object. no matter what kind. the siplest way to implement restricted words
	private restrictedWords(control: FormControl): {[key: string]: any}
		
		{
			return control.value.includes('foo')
			? {'restrictedWords': 'foo'} // if it is invalid: return this
			: null // if it is VALID: return null
		}

	// now another example but more complex of custom validator as a function:
	private restrictedWords2(words: any){
		return (control: FormControl): {[key: string]: any} => { // this is a fat error function from ES6 with some TS typing info.
			if (!words) return null 

			// finding any restrictedWords2 that exist in our control value.
			var invalidWords = words
				.map((w: any) => control.value.includes(w) ? w : null)
				.filter((w:any) => w != null)

			return invalidWords && invalidWords.length > 0
				? {'restrictedWords': invalidWords.join(', ')}
				: null
			}
		}


	saveSession(formValues: any) {
		//  
		let group:IGroups = {
			id: +formValues.g_id, // casting into a number 1, 2 ou 3
			name: formValues.name,
			date: this.today, // this must be timestap. 
			description: formValues.description,
		}

		 this.movingToNewGroup.emit(group) // now we have an output parameter to bind to, now we just have to bind it to our event details page.
	}

	onCancelClick() {
		this.cancelChangeGroup.emit(console.log('thissssssss')) // 
	}

	onResetlClick() {
		this.cancelChangeGroup.emit(console.log('thaaaaaaaaaaat')) // 
	}

} 
