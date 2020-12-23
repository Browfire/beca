import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DosComponent } from './dos/dos.component';
import { FolderComponent } from './folder/folder.component';
import { TresComponent } from './tres/tres.component';
import { UnoComponent } from './uno/uno.component';

const routes: Routes = [
  { path: 'uno', component: UnoComponent, children: [
    { path: 'dos', component: DosComponent },
    { path: 'folders', component: FolderComponent }
  ]
  },
  { path: 'ultimo', component: TresComponent },
  { path: '', component: BienvenidaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
