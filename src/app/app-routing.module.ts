import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { DosComponent } from './components/dos/dos.component';
import { IsSesionAliveGuard } from './guards/is-sesion-alive.guard';
import { MenuComponent } from './components/menu/menu.component';
import { TresComponent } from './components/tres/tres.component';
import { UnoComponent } from './components/uno/uno.component';
import { IsAdminGuardGuard } from './guards/is-admin-guard.guard';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },

  { path: 'uno', component: UnoComponent, 
  canActivate: [
    IsSesionAliveGuard
  ],
  children: [
    { path: 'dos', component: DosComponent },
    { path: 'menu', component: MenuComponent }
  ]},

  { path: 'tres', component: TresComponent,
  canActivate: [
    IsSesionAliveGuard, IsAdminGuardGuard
  ]},

  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }