import { Component } from '@angular/core';

export interface MenuItem
{
    getName: string; // getName:    () => string;
    isEnabled: boolean; // isEnabled: () => boolean;
    isVisible: boolean; // isVisible: () => boolean;
    onClick:   () => void;
    subList?: MenuItem[]
}

// export enum eMenuItemType
// {
//     menu,
//     separator,
// }

// if (item instanceof Array)
// add the dropdown condition....

@Component({
  selector: 'my-menu-item',
  template: `
    <ul>
        <li *ngFor="let item of items">
            <a
              routerLinkActive="active"
              [routerLinkActiveOptions]="{exact: true}" 
              [routerLink]="item.onClick()">
                {{ item.getName }}
            </a>
        </li>
        <!-- <div *ngSwitchCase="type.separator" class="separator"></div> -->

        <ng-container *ngFor="let item of items">
          <div *ngIf="onDropdownList(item)" 
                class="dropdown-menu" >
            <li 
              *ngFor="let item of items"
              [ngClass]="onDropdownClass(item)">
              <a
                [href]="ite.onClick()" 
                    > {{ item.getName }} 
              </a>
            </li>
            <hr/>
            <li class="enabled">
              <a >Last Item </a>
            </li>
          </div>
        </ng-container>

      <!--  -->
    </ul>
  	`,
  styleUrls: ['./menu-item.component.css']
})
export class AppMenuItem  { 
  name = 'Developers!'; 
  menu  = [
        {
          getName: "All Assets",
          isEnabled: true,
          isVisible: true,
          onClick: () => this.showAllAssets(),
        },
        {
          getName: "Insert an Asset",
          isEnabled: true,
          isVisible: true,
          onClick: () => this.addNewAsset(),
        },
        {
          getName: "All Groups",
          isEnabled: true, // this.menuToDo() == '1' ? false : false
          isVisible: true,
          onClick: () => this.showAllGroups(),
          subList: 
          [
              {
                getName: 'BBC Web site',
                isEnabled: true,
                isVisible: true,
                onClick: () => 'https://www.bbc.com/',
              },
              {
                getName: 'Google',
                isEnabled: true,
                isVisible: false,
                onClick: () => 'https://www.google.com/',
              },
              {
                getName: 'Wikipedia.',
                isEnabled: true, // this.menuToDo() == '1' ? false : false
                isVisible: true,
                onClick: () => 'https://en.wikipedia.org/wiki/Main_Page',
              },
              {
                getName: 'Insert a Group_TODO',
                isEnabled: true, // this.menuToDo() == '1' ? false : false
                isVisible: true,
                onClick: () => '',
              },
          ],
        },

        ];


  // @Input()
  get items(): MenuItem[]
  {
    let menu: MenuItem[] = []; // new list excluding disabled <li>
    this.menu.forEach(item => {
        if (item.isEnabled == false)
          return;
        else {
          return menu.push(item);
        }
      });
      return menu;
  }

  constructor() {
    // this.menu.forEach(item => console.log(item.subList.length))
  }
// [ngSwitch]="getMenuEntryType(item)"
  // getMenuEntryType(item: MenuItem): eMenuItemType
  // {
  //     return isMenuItem(item) ? eMenuItemType.menu
  //                             : eMenuItemType.separator;
  // }

    isEnabled(item: MenuItem): boolean
    {
        return true; //item.isEnabled();
    }

    // getItemText(item: MenuItem): string
    // {
    //     return ; 
    // }

  showAllAssets():string {
    return '/assets';
  }

  showAllGroups():string {
    return '/groups'; // TODO: 
  }

  addNewAsset():string {
    return '/assets/new';
  }

  menuToDo():string {
    return ; // TODO
  }

  onRouterLinkActiveOptions(item: MenuItem ):boolean {
    if (item.getName == 'All Assets') // TODO 
      return true;
    else
      return false;
  }

  onDropdownList(item: MenuItem) {
    if (item.subList && item.subList.length > 0)
      return false;
    else
      return false;
    // return item instanceof Array : true ? false;
  }

  onDropdownClass(item: any):string { // MenuItem -> type
    if (!item.isEnabled || item.onClick().length == 0)
      return 'disabled';
    else
      return 'dropdown-item';
  }
}