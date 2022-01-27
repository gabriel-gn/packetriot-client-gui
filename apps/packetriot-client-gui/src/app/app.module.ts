import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { ColorThemeModule, CommandPaletteModule } from '@mprisma/components';
import { HotkeyModule } from 'angular2-hotkeys';
import { DefaultPageLayoutModule } from './layouts/default-page-layout/default-page-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,
      relativeLinkResolution: 'legacy',
      scrollPositionRestoration: 'enabled'
    }),
    HttpClientModule,
    ColorThemeModule.forRoot({theme: 'light'}),
    HotkeyModule.forRoot(),
    CommandPaletteModule.forRoot({
      hotkeys: ['meta+k', 'ctrl+k'],
      paletteEntries: []
    }),
    DefaultPageLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
