import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AggiungiComponent } from './aggiungi/aggiungi.component';
import { DettagliComponent} from './dettagli/dettagli.component';
import { FilmsComponent } from './films/films.component';

const routes: Routes = [
  {
    path: '',
    component: FilmsComponent,
  },
  {
    path: 'aggiungi',
    component: AggiungiComponent,
  },
  {
    path: 'dettagli',
    component: DettagliComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
