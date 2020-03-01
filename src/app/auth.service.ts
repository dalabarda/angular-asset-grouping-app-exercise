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
