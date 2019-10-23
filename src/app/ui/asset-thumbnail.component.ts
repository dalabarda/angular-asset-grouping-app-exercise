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
    .thumbnail { min-height: 150px; }
    .pad-left { margin-left: 10px; }
    .text { font-size: 80%; }
    .well div { color: #bbb;}
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
    
  `] // '!important' otherwise, this style will get overridden by another one.
})
export class AssetThumbnailComponent {
  @Input() asset : IAsset   // this is just creating a property called event and telling TypeScript that it is of type any.
                            // we don't care for now, what data type is. 

                            // the Imput() decorator tells Angular that this event will be passed in from another component





  // CHANGE THIS FUNCTION
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


/*
      <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>

      <div *ngIf="asset?.GPSposition">
        <span>Location: {{asset?.GPSposition?}}</span>
        <span class="pad-left">{{asset?.GPSposition?.x}}, {{asset?.GPSposition?.y}}</span>
      </div>



            <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event?.onlineUrl}}
      </div>


*/