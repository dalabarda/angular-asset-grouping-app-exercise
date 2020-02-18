import { Component } from '@angular/core';

export interface MenuItem
{
    getName: string;
    isEnabled: boolean;
    isVisible: boolean;
    // getName:    () => string;
    // isEnabled: () => boolean;
    // isVisible: () => boolean;
    onClick:   () => void;
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
              [routerLinkActiveOptions]="onRouterLinkActiveOptions(item)" 
              [routerLink]="item.onClick()">
                {{ item.getName }} 
            </a>
        </li>
        <!-- <div *ngSwitchCase="type.separator" class="separator"></div> -->
        <div *ngIf="false" 
              class="dropdown-menu" >
          <li 
            *ngFor="let item of items"
            [ngClass]="onDropdownClass(item)">
            <a 
              [href]="item.onClick()" 
                  > {{ item.getName }}
            </a>
          </li>
            <a *ngIf="!auth.isAuthenticated()" [routerLink]="['user/login']">Login</a>
            <a *ngIf="auth.isAuthenticated()" [routerLink]="['user/profile']">Welcome {{ auth.currentUser.firstName }}</a>
          <hr/>
          <li class="enabled">
            <a >Last Item </a>
          </li>
        </div>
      <!--  -->
    </ul>
  	`,
  styles: [`

.navbar-right2 {
  float: right !important;
  margin-right: -15px;
}

ul {
  float: left;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

li {
  position: relative;
  display: inline-block;
}
li > a {
  position: relative;
  display: block;
  padding: 10px 15px;
}
li:hover,
li:focus {
  text-decoration: none;
  background-color: #eee;
}

li.disabled > a {
  color: #999;
}

li.disabled:hover,
li.disabled:focus {
  color: #707;
  text-decoration: none;
  cursor: not-allowed;
  background-color: yellow;
}

a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
} 

`]
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
          getName: "Insert a Group_TODO",
          isEnabled: false, // this.menuToDo() == '1' ? false : false
          isVisible: true,
          onClick: () => this.menuToDo(),
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
    return '/events';
  }

  addNewAsset():string {
    return '/events/new';
  }

  menuToDo():string {
    return ; // TODO
  }

  onRouterLinkActiveOptions(item: MenuItem ):string {
    if (item.getName == 'All Assets') // TODO 
      return '{exact:true}';
    else
      return '{exact:false}';
  }
}

