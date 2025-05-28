import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: '/auth',
    loadComponent: () =>
      import('./core/layouts/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'forget-password',
        loadComponent: () =>
          import('./core/components/ui/forget/forget.component').then(
            (m) => m.ForgetComponent
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./core/components/ui/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
    ],
  },
];
