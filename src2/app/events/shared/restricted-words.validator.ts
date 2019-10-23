import { FormControl } from '@angular/forms'



// here, instead of 'private' we must to use 'export function'. the rest is the same
export function restrictedWords3(words: any){
	return (control: FormControl): {[key: string]: any} => { // this is a fat error function from ES6 with some TS typing info.
		if (!words) return null 

		// finding any restrictedWords2 that exist in our control value.
		var invalidWords = words
			.map((w: any) => control.value.includes(w) ? w : null)
			.filter((w: any) => w != null)

		return invalidWords && invalidWords.length > 0
			? {'restrictedWords': invalidWords.join(', ')}
			: null
		}
	}

// ATENTION! 
	// PS01: don't forget to add this file into the local Barrel!!!
	// PS02: don't forget to import this function name into the .ts file that it is going to be used!!!