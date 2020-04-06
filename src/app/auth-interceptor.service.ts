import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  // this interface forces us to use the follwing method
  intercept(req: HttpRequest<any>, next: HttpHandler){ // requires 2 arguments: request, and next
    // run code right before the requests leave our application
    // this code runs for every request that leaves the app
    console.log('Request is on its way');
    console.log(req.url);
    const modifiedRequest = req.clone( // clone() allows you to overwrite all the core things
      {
        // url: 'someurl' // you can set urls...
        headers: req.headers.append('Auth', 'xyz') // headers...
      }
    );


    // handle() gives us an observable... 
    // return next.handle(req); // 
    return next.handle(modifiedRequest) //
      .pipe(
        tap(event => { // you always get events here in the interceptor (better granular response)
          // 
          console.log(event)
          if (event.type === HttpEventType.Response) {
            console.log('Response arrived, boddy data:');
            console.log(event.body);
          }
        })
      );
  }
}


// you can control the interceptor with a if statement. read more about it.
// inside interceptor you can not only log but also modify data.
//  if you wanna modify a request you need to create a new one.