import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
	AssetsWrapperComponent,
	AssetDetailsComponent,
	CreateAssetComponent,
	AssetRouteActivator,
	EventListResolver,
	MoveGroupComponent
} from './ui/index';

import { AuthGuard_2 } from './auth-guard.service';

export const appRoutes:Routes = [
	{path: 'assets/new', component: CreateAssetComponent, canDeactivate: ['canDeactivateCreateAsset'] }, // in this example I used a function. In order to define this function, we just need to register this as a provider in our module.
	{path: 'assets', component: AssetsWrapperComponent, resolve: {events:EventListResolver} },
	{path: 'assets/:id', component: AssetDetailsComponent, canActivate: 
  [
    // AssetRouteActivator
    AuthGuard_2
     ] }, // in this example I used a service to route to a 404 page. "event-route-activator.service" in event details page. (route guard procedure)
	{path: '', redirectTo: '/assets', pathMatch: 'full' }, // defining a default route
	
  {path: 'events/session/new', component: MoveGroupComponent},
	
	{path: 'user', loadChildren: 'app/user/user.module#UserModule'}, // this is saying when a route starts with /user, load the UserModule from this path
  
  {path: '404', component: Error404Component },
  {path: '**', redirectTo: '/404' }, // wildcard that catch url all it doesn't know.
]

/* 
  'redirectTo' requires 'pathMatch' property whose options are two: prefix or full. 
	  prefix will redirect if the URL starts with the specified path string.
	  full means redirect if it fully matches the specified path string.
*/

/* 
  in a nutshell what routes do:
    1)  add the <router-outlet> component to our app.component
    2)  we define our routes for our pages (including the default route) into routes.ts placed din the root of the app
    3)  we load our routes into our events module using the router module
    4)  add the <base href="/"> into our HTML page
*/

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}