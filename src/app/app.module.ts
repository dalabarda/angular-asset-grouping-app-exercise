import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 

import {
    EventsListComponent,
    AssetService,
    AssetThumbnailComponent,
    AssetDetailsComponent,
    CreateAssetComponent,
    ThumbnailComponent,
    ListComponent,
    AssetRouteActivator,
    EventListResolver,
    MoveGroupComponent,
    DurationPipe,
    TruncatePipe
} from './ui/index'

import { AppComponent }  from './app.component';
import { NavBarComponent }  from './nav/navbar.component';
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'


@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,        // template-based forms (diving deeper)
      ReactiveFormsModule, // template-based forms (diving deeper)
      RouterModule.forRoot(appRoutes) 
    ],
  declarations: [ 
  		AppComponent, 
  		EventsListComponent,
      AssetThumbnailComponent,
      AssetDetailsComponent,
      NavBarComponent,
      ThumbnailComponent,
      ListComponent,
      CreateAssetComponent, 
      Error404Component,
      MoveGroupComponent,
      DurationPipe,
      TruncatePipe
  	],
  providers: [
      AssetService,
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