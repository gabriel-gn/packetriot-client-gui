import {Routes} from '@angular/router';
import {environment} from '../environments/environment';
import { DefaultPageLayoutComponent } from './layouts/default-page-layout/default-page-layout.component';

export const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        component: DefaultPageLayoutComponent,
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) // início
    }
];
