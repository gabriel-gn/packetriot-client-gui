import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPageLayoutComponent } from './default-page-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DefaultPageLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class DefaultPageLayoutModule {
}
