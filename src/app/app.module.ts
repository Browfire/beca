import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { MenuComponent } from './menu/menu.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { FolderComponent } from './folder/folder.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    MenuComponent,
    CabeceraComponent,
    UnoComponent,
    DosComponent,
    TresComponent,
    BienvenidaComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
