import { Component, Input } from '@angular/core'
import { IAsset } from './index'
import { GlobalService } from './../shared/global.service'


@Component({
  selector: 'asset-item',
  templateUrl: 'asset-item.component.html',
  styleUrls: ['asset-item.component.css'],
})
export class AssetItemComponent {
  @Input() asset : IAsset   
  
  // switsch the class based on grid or list
  private itemClass:string;

  getStartTypeStyle():Object {
    if (this.asset && this.asset.group_id === 1)
      return {color: '#007777', 'font-weight': 'bold'}
    if (this.asset && this.asset.group_id === 2)
      return {color: '#770000', 'font-weight': 'bold'}
    if (this.asset && this.asset.group_id === 3)
      return {color: '#000099', 'font-weight': 'bold'}
    return {}
  }

  getFirstString(): any {
    this.asset && this.asset.description.substring(0, 20)
    return {}
  }

  get assetSuffix(): string {
    return this.onAssetDataType(this.asset.suffix);
  }
 

  constructor(private globalService: GlobalService) { 
    this.globalService.currentMessage.subscribe(message => this.itemClass = message)
   }


  onAssetDataType(value: string): string {
    switch (value) {
      case eAssetFormat.Gif:
        return '(animated image)';
      case eAssetFormat.Jpeg:
      case eAssetFormat.Jpg:
      case eAssetFormat.Png:
      case eAssetFormat.Tif:
        return '(static image)';
      case eAssetFormat.Mp4:
        return '(video)';
      case eAssetFormat.Txt:
        return '(plain text)';
    }
  }

}

export enum eAssetFormat {
    
    Gif        = 'gif',
    Jpeg       = 'jpeg',
    Jpg        = 'jpg',
    Mp4        = 'mp4',
    Png        = 'png',
    Tif        = 'tif',
    Txt        = 'txt',
}