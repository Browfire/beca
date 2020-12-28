import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './components/base/base.component';
import { MenuComponent } from './components/menu/menu.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { UnoComponent } from './components/uno/uno.component';
import { DosComponent } from './components/dos/dos.component';
import { TresComponent } from './components/tres/tres.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FolderComponent } from './components/folder/folder.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
