import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { AssetService } from "../shared/asset.service";

@Injectable()
export class AssetRouteActivator implements CanActivate {
  
  constructor(
    private assetService: AssetService, 
    private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const assetExists = !!this.assetService.getAsset(+route.params["id"]);

    if (!assetExists) 
      return this.router.navigate(["/404"]);

  return assetExists;
  }
}
