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

  // student Routes

  {
    path: 'student',
    loadComponent: () =>
      import('./student/layout/student-layout/student-layout.component').then(
        (m) => m.StudentLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'exams',
        loadComponent: () =>
          import(
            './student/components/ui/student-exam/student-exam.component'
          ).then((m) => m.StudentExamComponent),
      },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './student/components/ui/student-data/student-data.component'
          ).then((m) => m.StudentDataComponent),
      },
    ],
  },

  // instrctors Routes

  {
    path: 'instructor',
    loadComponent: () =>
      import(
        './Intsractor/layout/instractor-layout/instractor-layout.component'
      ).then((m) => m.InstractorLayoutComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import(
            './Intsractor/components/ui/instractor-data/instractor-data.component'
          ).then((m) => m.InstractorDataComponent),
      },
      {
        path: 'student',
        loadComponent: () =>
          import(
            './shared/components/student-list/student-list.component'
          ).then((m) => m.StudentListComponent),
      },
    ],
  },

  // Admin Routes

  {
    path: 'admin',
    loadComponent: () =>
      import('./Admin/layout/admin-layout/admin-layout.component').then(
        (m) => m.AdminLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./Admin/components/ui/admin-data/admin-data.component').then(
            (m) => m.AdminDataComponent
          ),
      },
      {
        path: 'student',
        loadComponent: () =>
          import(
            './shared/components/student-list/student-list.component'
          ).then((m) => m.StudentListComponent),
      },
      {
        path: 'instractor',
        loadComponent: () =>
          import(
            './shared/components/instractor-list/instractor-list.component'
          ).then((m) => m.InstractorListComponent),
      },
      {
        path: 'addInstractor',
        loadComponent: () =>
          import(
            './Intsractor/components/ui/add-instractors/add-instractors.component'
          ).then((m) => m.AddInstractorsComponent),
      },
    ],
  },
];
