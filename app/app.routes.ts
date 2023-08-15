import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { ChartComponent } from './chart/chart.component';
import { LoginComponent, RegisterComponent } from './account';
import { authGuard } from './_helpers';
import { ProductListComponent } from './product-list/product-list.component';

const usersRoutes = () =>
  import('./users/users.routes').then((x) => x.USERS_ROUTES);

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'chart', component: ChartComponent, canActivate: [authGuard] },
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [authGuard],
  },
  { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];
