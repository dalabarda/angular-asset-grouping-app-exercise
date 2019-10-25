import { Component, Input } from '@angular/core'
import { IAsset, TruncatePipe } from './shared/index'
import { GlobalService } from './shared/global.service'


@Component({
  selector: 'asset-item',
  template: `
    <div>
      <h2>{{asset?.name | uppercase }}</h2>
      <div [ngClass]="itemClass">
        <div><span> Data type: {{ asset?.type }} </span></div>

        <div 
          [ngStyle]="getStartTypeStyle()" 
          [ngSwitch]="asset?.suffix"
          >
            Type: {{asset?.type}}
          <span *ngSwitchCase="'gif'">(animated image)</span>
          <span *ngSwitchCase="'jpg'">(static image)</span>
          <span *ngSwitchCase="'jpeg'">(static image)</span>
          <span *ngSwitchCase="'mp4'">(video)</span>
          <span *ngSwitchDefault>(Normal file)</span>
        </div>

        <div [ngStyle]="getStartTypeStyle()" >Group: {{asset?.group_id}}</div>


        <div *ngIf="asset?.GPSposition" class="location">
          <span> Latitude: {{asset?.GPSposition?.y}} </span>
          <span> Longitude: {{asset?.GPSposition?.x}} </span>        
        </div>
      </div>



      <div class= "info" style="text-align: justify;">{{ asset?.description | limitTo:100 }}</div>

    </div>
  `,
  styles: [`
    .info {
      font-size: 10px;
    }
  
    .list > div {
      margin-right: 75px;
      display: inline-flex;
    }

    .location {
      text-align: right;
    }


  `] // '!important' otherwise, this style will get overridden by another one.
})
export class AssetItemComponent {
  @Input() asset : IAsset   
  
  // switsch the class based on grid or list
  private itemClass:string;

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

  
 

  constructor(private globalService: GlobalService) { 
    this.globalService.currentMessage.subscribe(message => this.itemClass = message)
   }






}