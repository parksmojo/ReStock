import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'choose-pantry',
    loadComponent: () =>
      import('./pages/choose-pantry/choose-pantry.page').then(
        (m) => m.ChoosePantryPage
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./components/tabs/tabs.routes').then((m) => m.routes),
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
