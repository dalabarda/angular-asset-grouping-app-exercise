// like any other service this will import an injectable class
import { Injectable } from '@angular/core'
import { IUser } from './user.model'


@Injectable()  
export class AuthService {
  currentUser:IUser
  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Joohn',
      lastName: 'Papa' // if there is parameter wrong in 'user.model' it will be highlighted here
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:string, lastName:string) {
    this.currentUser.firstName = firstName
    this.currentUser.lastName = lastName
  }

    loggedIn = false; //TODO

  // add delay: just to fake a couple of time to finish, like async connection
  isAuthenticatedFake() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}