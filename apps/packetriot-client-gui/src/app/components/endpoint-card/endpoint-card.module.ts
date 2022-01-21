import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndpointCardComponent } from './endpoint-card.component';
// import { BasicCardModule } from '@mprisma/components';

const components = [
  EndpointCardComponent
];

@NgModule({
  declarations: components,
  exports: components,
  imports: [
    CommonModule,
    // BasicCardModule
  ]
})
export class EndpointCardModule {
}
