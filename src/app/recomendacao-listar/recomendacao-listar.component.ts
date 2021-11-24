import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recomendacao } from '../recomendacao/recomendacao.model';
import { RecomendacaoService } from '../recomendacao/recomendacao.service';

@Component({
  selector: 'recomendacao-listar',
  templateUrl: './recomendacao-listar.component.html',
  styleUrls: ['./recomendacao-listar.component.css']
})
export class RecomendacaoListarComponent implements OnInit, OnDestroy {

  recomendacoes: Recomendacao[] = [];

  private recomendacoesSubscription!: Subscription;
  public estaCarregando = false;

  constructor(public recomendacaoService: RecomendacaoService) {
  }

  ngOnInit(): void {
    this.estaCarregando = true;
    this.recomendacaoService.getRecomendacoes();
    this.recomendacoesSubscription = this.recomendacaoService
      .getListaDeRecomendacoesAtualizadaObservable()
      .subscribe((recomendacoes: Recomendacao[]) => {
        this.estaCarregando = false;
        this.recomendacoes = recomendacoes;
      });
  }

  ngOnDestroy(): void {
    this.recomendacoesSubscription.unsubscribe();
  }

  onDelete(id: string): void{
    this.recomendacaoService.removerRecomendacao(id);
  }
}
