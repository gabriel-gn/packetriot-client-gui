import { Component, Input } from '@angular/core';
import { PacketriotHttps } from '@packetriot-client-gui/api-interfaces';

@Component({
  selector: 'app-endpoint-card',
  templateUrl: './endpoint-card.component.html',
  styleUrls: ['./endpoint-card.component.scss']
})
export class EndpointCardComponent  {

  @Input() endpointEntry: PacketriotHttps | undefined = undefined;

}
