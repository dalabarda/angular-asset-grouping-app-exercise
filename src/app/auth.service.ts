// this is just to fake a server!!!!
export class AuthService_2 {
  loggedIn = false;

  // just to fake it will take a couple of time to finish
  isAuthenticated() {
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


// @Injectable()  
// export class AuthService {
//   currentUser:IUser
//   loginUser(userName: string, password: string) {
//     this.currentUser = {
//       id: 1,
//       userName: userName,
//       firstName: 'Joohn',
//       lastName: 'Papa' // if there is parameter wrong in 'user.model' it will be highlighted here
//     }
//   }

//   isAuthenticated() {
//     return !!this.currentUser;
//   }

//   updateCurrentUser(firstName:string, lastName:string) {
//     this.currentUser.firstName = firstName
//     this.currentUser.lastName = lastName
//   }
// }