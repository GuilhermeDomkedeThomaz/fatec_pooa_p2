import { Component } from '@angular/core';
import { Recomendacao } from './recomendacao/recomendacao.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'prova-p2';

  recomendacoes: Recomendacao[] = [];

  onRecomendacaoInserida(recomendacao: any) {
    this.recomendacoes = [recomendacao, ...this.recomendacoes];
  }
}
