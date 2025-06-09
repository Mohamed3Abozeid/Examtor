import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (localStorage.getItem('token')) {
    req = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + localStorage.getItem('token')!,
      },
    });
  }

  return next(req);
};
