import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { AssetService } from "../asset.service";

@Injectable()
export class AssetRouteActivator implements CanActivate {
  
  constructor(
    private assetService: AssetService, 
    private router: Router) {}

  // 
  canActivate(route: ActivatedRouteSnapshot) {
    // NOTE: if route were a number it must be  +route.params["id"]
    // this variable only check whether a route address is true or false
    const assetExists = !!this.assetService.getAssetObs(route.params["id"]);

    // in case the var results false...
    if (!assetExists)
      return this.router.navigate(["/404"]);

  return assetExists;
  }
}
