import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // 
import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {
    AssetsWrapperComponent,
    AssetService,
    GlobalService,
    AssetItemComponent,
    AssetDetailsComponent,
    AssetDetailCreateComponent,
    AssetListsComponent,
    AssetRouteActivator,
    EventListResolver,
    AssetDetailEditComponent,
    DurationPipe,
    TruncatePipe
} from './ui/index';

import { NavBarComponent }  from './nav/navbar.component';
import { AppMenuDropdown }  from './nav/dropdown.component';
import { AppMenuItem }  from './nav/menu-item.component';

import { Error404Component } from './errors/404.component';

import { AuthService } from './user/auth.service';
import { AuthService_2 } from './auth.service'; // TOFIX: move the auth service into one file
import { AuthGuard } from './auth-guard.service';


import { DropdownDirective } from './shared/dropdown.directive';
import { CounterService } from './counter.service';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,        // template-based forms (diving deeper)
      ReactiveFormsModule, // template-based forms (diving deeper)
      AppRoutingModule,
    ],
  declarations: [ 
  		AppComponent,
      AppMenuDropdown,
      AppMenuItem,
  		AssetsWrapperComponent,
      AssetItemComponent,
      AssetDetailsComponent,
      NavBarComponent,
      AssetListsComponent,
      AssetDetailCreateComponent, 
      Error404Component,
      AssetDetailEditComponent,
      DurationPipe,
      TruncatePipe,
      DropdownDirective
  	],
  providers: [
      AssetService,
      CounterService,
      GlobalService,
      AssetRouteActivator,
      EventListResolver,
      AuthGuard,
      AuthService_2,
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

function checkDirtyState(component: AssetDetailCreateComponent) {
  if (component.isDirty)
      return window.confirm('You have not saved this file, do you really want to cancel?')
  return true
}