import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule, Routes } from '@angular/router';

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
  ]
})
export class HomePageModule { }
