import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'page-one',
    loadComponent: () =>
      import('./page-one.component').then((m) => m.PageOneComponent),
  },
  {
    path: 'page-two',
    loadComponent: () =>
      import('./page-two.component').then((m) => m.PageTwoComponent),
  },
  {
    path: 'page-three',
    loadComponent: () =>
      import('./page-three.component').then((m) => m.PageThreeComponent),
  },
  { path: '', redirectTo: 'page-one', pathMatch: 'full' },
  { path: '**', redirectTo: 'page-one' },
];
