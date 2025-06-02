import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  req = req.clone({
    setHeaders: {
      Authorization: 'Bearer ' + localStorage.getItem('token')!,
    },
  });

  return next(req);
};
