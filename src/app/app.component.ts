import { Component } from '@angular/core';

import { AssetService } from './asset.service';

@Component({
  selector: 'my-app',
  template: `
  	<nav-bar></nav-bar>
    <br>
  	<h1>Hello {{ name }}</h1>
    
    <!-- it looks like a component but it is only a directive -->
    <!-- like element style selector -->
  	<router-outlet></router-outlet>

  	`,
  styles: [`  `],
  providers: [AssetService]
})
export class AppComponent  { name = 'Developers!'; }
