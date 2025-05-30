import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  // auth routes
  {
    path: 'auth',
    loadComponent: () =>
      import('./core/layouts/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/components/ui/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./core/layouts/forget/forget.component').then(
            (m) => m.ForgetComponent
          ),
      },
    ],
    title: 'Login',
  },
];
