import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token')) {
    // Mohamed Abozeid
    return true;
  } else {
    return false;
  }
};
