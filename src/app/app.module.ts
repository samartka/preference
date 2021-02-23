import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { MenulistComponent } from './menulist/menulist.component';
import { HomeComponent } from './home/home.component';
import { ConfigKeyComponent } from './config-key/config-key.component';
import { ConfigkeyListComponent } from './configkey-list/configkey-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TabMenuComponent,
    MenulistComponent,
    HomeComponent,
    ConfigKeyComponent,
    ConfigkeyListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
