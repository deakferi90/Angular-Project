import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent, RegisterComponent } from './account';
import { authGuard } from './_helpers';
import { ChartComponent } from './chart/chart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';

const usersRoutes = () =>
  import('./users/users.routes').then((x) => x.USERS_ROUTES);

export const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [authGuard] },
  { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
  { path: 'chart', component: ChartComponent, canActivate: [authGuard] },
  {
    path: 'products-list',
    component: ProductListComponent,
    canActivate: [authGuard],
  },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
