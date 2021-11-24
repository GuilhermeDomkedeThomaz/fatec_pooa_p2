import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecomendacaoListarComponent } from './recomendacao-listar/recomendacao-listar.component';
import { RecomendacaoInserirComponent } from './recomendacao-inserir/recomendacao-inserir.component';

const routes: Routes = [
  { path: '', component: RecomendacaoListarComponent },
  { path: 'criar', component: RecomendacaoInserirComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
