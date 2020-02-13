import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 
import { AppComponent }  from './app.component';
import { appRoutes } from './routes';

import {
    AssetsWrapperComponent,
    AssetService,
    GlobalService,
    AssetItemComponent,
    AssetDetailsComponent,
    CreateAssetComponent,
    AssetListsComponent,
    AssetRouteActivator,
    EventListResolver,
    MoveGroupComponent,
    DurationPipe,
    TruncatePipe
} from './ui/index';

import { NavBarComponent }  from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { DropdownDirective } from './shared/dropdown.directive';


@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,        // template-based forms (diving deeper)
      ReactiveFormsModule, // template-based forms (diving deeper)
      RouterModule.forRoot(appRoutes) 
    ],
  declarations: [ 
  		AppComponent, 
  		AssetsWrapperComponent,
      AssetItemComponent,
      AssetDetailsComponent,
      NavBarComponent,
      AssetListsComponent,
      CreateAssetComponent, 
      Error404Component,
      MoveGroupComponent,
      DurationPipe,
      TruncatePipe,
      DropdownDirective
  	],
  providers: [
      AssetService,
      GlobalService,
      AssetRouteActivator,
      EventListResolver,
      AuthService ,
      {     // the mechanism to ask before an important action on the website.
        provide: 'canDeactivateCreateAsset', // this is requested...
        useValue: checkDirtyState // ... use this 'useValue' to fulfil 
      }
    ],
  bootstrap:[ 
  		AppComponent
  	]
})

export class AppModule { }

function checkDirtyState(component: CreateAssetComponent) {
  if (component.isDirty)
      return window.confirm('You have not saved this file, do you really want to cancel?')
  return true
}