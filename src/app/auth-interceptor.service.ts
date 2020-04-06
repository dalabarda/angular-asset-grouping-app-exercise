import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  // this interface forces us to use the follwing method
  intercept(req: HttpRequest<any>, next: HttpHandler){ // requires 2 arguments: request, and next
    // run code right before the requests leave our application
    // this code runs for every request that leaves the app
    console.log('Request is on its way');
    
    // 
    return next.handle(req); // 
  }
}


// you can control the interceptor with a if statement. read more about it.
// inside interceptor you can not only log but also modify data.
//  