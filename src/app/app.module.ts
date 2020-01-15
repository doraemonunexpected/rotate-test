import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RotatePageComponent} from './rotate-page/rotate-page.component';
import {NormalTableComponent} from './normal-table/normal-table.component';
import {RotatedWrapperComponent} from './rotated-wrapper/rotated-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    RotatePageComponent,
    NormalTableComponent,
    RotatedWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
