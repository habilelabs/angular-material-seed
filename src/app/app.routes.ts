/**
 * @Author Shankar Morwal
 * Router file. Every module will have their own routers.
 */
import { Routes } from '@angular/router';
import { LoginRoutes} from './login/index';
import { HomeRoutes } from './home/index';
export const routes: Routes = [
  ...LoginRoutes,
  ...HomeRoutes
];
