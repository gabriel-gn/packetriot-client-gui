import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EndpointCardModule } from '../../components/endpoint-card/endpoint-card.module';
import { NgIfLoadedModule } from '@mprisma/components';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  }
];

const components = [
  HomePageComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EndpointCardModule,
    NgIfLoadedModule.forRoot()
  ]
})
export class HomePageModule { }
