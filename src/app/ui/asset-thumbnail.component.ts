import { Component, Input } from '@angular/core'
import { IAsset, TruncatePipe } from './shared/index'
import { GlobalService } from './shared/global.service'


@Component({
  selector: 'asset-thumbnail',
  template: `
    <div [routerLink]="['/events', asset.id]" [ngClass]="itemClass">
      <h2>{{asset?.name | uppercase }}</h2>
      <div>Data type: {{ asset?.type }} {{itemClass}}</div>

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



      <div style="text-align: justify;">{{ asset?.description | limitTo:100 }}</div>

    </div>
  `,
  styles: [`

    .text { font-size: 80%; }

    .grid {
      width: 800px;
      background-color: magenta;
    }

    .list {
      width: 300px;
      background-color: cyan;
    }

  
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

  itemClass:string;

  getView(): any {
    this.globalService.view ? 'list' : 'grid';
  }
  

  constructor(private globalService: GlobalService) {  }


  ngOnInit() {
    this.globalService.currentMessage.subscribe(message => this.itemClass = message)
  }



}