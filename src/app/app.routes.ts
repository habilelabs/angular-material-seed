import { Routes } from '@angular/router';
import { LoginRoutes, LoginComponent } from './login/index';
export const routes: Routes = [
  ...LoginRoutes,
	{ path: '**', component: LoginComponent }
];
