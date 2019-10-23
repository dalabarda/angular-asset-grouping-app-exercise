import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { AssetService } from "../shared/asset.service"

@Injectable()
export class AssetRouteActivator implements CanActivate {
	constructor(private assetService:AssetService, private router:Router) { // injecting the event service
					
	}

	canActivate(route:ActivatedRouteSnapshot) {
		const assetExists = !!this.assetService.getAsset(+route.params['id']) // I don't understand why we have to cast the event id to a number here. read more about that!

		if (!assetExists)
			this.router.navigate(['/404'])
		return assetExists
	}
}