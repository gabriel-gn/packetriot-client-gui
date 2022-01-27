import { Component } from '@angular/core';
import { ColorThemeService, CommandPaletteService } from '@mprisma/components';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'packetriot-client-gui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public readonly colorTheme: ColorThemeService,
    public readonly commandPalette: CommandPaletteService,
  ) {}
}
