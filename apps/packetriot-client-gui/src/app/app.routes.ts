import {Routes} from '@angular/router';
import {environment} from '../environments/environment';

export const APP_ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
        path: 'home',
        loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) // início
    }
];
