import { Component } from '@angular/core';

import { AssetService } from './asset.service';

@Component({
  selector: 'my-app',
  template: `
  	<nav-bar></nav-bar>
    <br>
  	<h1>Hello {{ name }}</h1>
      
  	<router-outlet></router-outlet>

  	`,
  styles: [`  `],
  providers: [AssetService]
})
export class AppComponent  { name = 'Developers!'; }
