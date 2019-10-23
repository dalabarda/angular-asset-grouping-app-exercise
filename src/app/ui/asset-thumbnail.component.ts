import { Component, Input } from '@angular/core'
import { IAsset, TruncatePipe } from './shared/index'

@Component({
  selector: 'asset-thumbnail',
  template: `
    <div [routerLink]="['/events', asset.id]" class="list-item">
      <h2>{{asset?.name | uppercase }}</h2>
      <div>Data type: {{ asset?.type }}</div>

      <div [ngStyle]="getStartTypeStyle()" [ngSwitch]="asset?.type">
        Type: {{asset?.type}}
        <span *ngSwitchCase="'gif'">(animated image)</span>
        <span *ngSwitchCase="'jpg'">(static image)</span>
        <span *ngSwitchCase="'jpeg'">(static image)</span>
        <span *ngSwitchCase="'mp4'">(video)</span>
        <span *ngSwitchDefault>(Normal file)</span>
      </div>

      <div [ngStyle]="getStartTypeStyle()" >Group: {{asset?.group_id}}</div>


      <div *ngIf="asset?.GPSposition">
        <span >Latitude: {{asset?.GPSposition?.y}}</span>
        <br>
        <span>Longitude: {{asset?.GPSposition?.x}}</span>        
      </div>
      <br>



      <div class="text" style="text-align: justify;">{{ asset?.description | limitTo:100 }}</div>

    </div>
  `,
  styles: [`
    .list-item {
      padding: 19px;
      background-color: #f5f5f5;
      border: 1px solid #e3e3e3;
      -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
      box-shadow: inset 0 1px 1px rgba(0,0,0,.05);
    }

    .list-item:hover {
      background-color: #E6E6E6;
      cursor: pointer;
    }

    .text { font-size: 80%; }
  `] // '!important' otherwise, this style will get overridden by another one.
})
export class AssetThumbnailComponent {
  @Input() asset : IAsset   


  getStartTypeStyle():any {
    if (this.asset && this.asset.group_id === 1)
      return {color: '#007777', 'font-weight': 'bold'}
    if (this.asset && this.asset.group_id === 2)
      return {color: '#770000', 'font-weight': 'bold'}
    return {}
  }

  getFirstString(): any {
    this.asset && this.asset.description.substring(0, 20)
    return {}
  }

}