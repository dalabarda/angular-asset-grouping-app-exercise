import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'


@Injectable()
export class GlobalService {
  public view= new BehaviorSubject<any | null>(null);
  
  // default class
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();



  constructor() {  }

  // changeSelectedView(bool: boolean) {
  //   this.view.next(bool)
  // }


  changeMessage(message: string) {
    this.messageSource.next(message)
  }


  
}



