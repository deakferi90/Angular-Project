import { NgModule, ApplicationRef, NgModuleFactory, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultExport, RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { HomeComponent } from '../app/home';
import { authGuard } from './_helpers';
import { LoginComponent, RegisterComponent } from './account';
import { Observable } from 'rxjs';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [],
  imports: [
    AppComponent,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeComponent,

    SharedModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [authGuard] },
      { path: 'users', loadChildren: usersRoutes, canActivate: [authGuard] },
      { path: 'chart', component: ChartComponent, canActivate: [authGuard] },
      {
        path: 'product-list',
        component: ProductListComponent,
        canActivate: [authGuard],
      },
      { path: 'account/login', component: LoginComponent },
      { path: 'account/register', component: RegisterComponent },

      // otherwise redirect to home
      { path: '**', redirectTo: '' },
    ]),
  ],
  exports: [],
  providers: [],
  bootstrap: [],
})
export class AppModule {
  constructor(private appRef: ApplicationRef) {}

  ngDoBootstrap() {
    // Manually bootstrap the application with your root component
    this.appRef.bootstrap(AppComponent);
  }
}
function usersRoutes():
  | Type<any>
  | Routes
  | NgModuleFactory<any>
  | Observable<
      Type<any> | Routes | DefaultExport<Type<any>> | DefaultExport<Routes>
    >
  | Promise<
      | Type<any>
      | Routes
      | NgModuleFactory<any>
      | DefaultExport<Type<any>>
      | DefaultExport<Routes>
    > {
  throw new Error('Function not implemented.');
}
