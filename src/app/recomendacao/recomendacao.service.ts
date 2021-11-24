import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recomendacao } from './recomendacao.model';

@Injectable({ providedIn: 'root' })
export class RecomendacaoService {

  private recomendacoes: Recomendacao[] = [];

  private listaRecomendacoesAtualizada = new Subject<Recomendacao[]>();

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  getRecomendacoes(): void {
    this.httpClient.get <{mensagem: string, recomendacoes: any}>('http://localhost:3000/api/recomendacoes')
    .pipe(map((dados) => {
      return dados.recomendacoes.map((recomendacao: { _id: string; descricao: string; dataCriacao: Date; }) => {
        return {
          id: recomendacao._id,
          descricao: recomendacao.descricao,
          dataCriacao: recomendacao.dataCriacao
        }
      })
    }))
    .subscribe(
      (recomendacoes) => {
        this.recomendacoes = recomendacoes;
        this.listaRecomendacoesAtualizada.next([...this.recomendacoes]);
      }
    )
  }

  incluirRecomendacao(descricao: string) {
    const recomendacao: Recomendacao = {
      id: '',
      descricao: descricao,
      dataCriacao: new Date()
    };

    this.httpClient.post<{mensagem: string, id: string}> ('http://localhost:3000/api/recomendacoes', recomendacao)
    .subscribe(
      (dados) => {
        console.log(dados.mensagem);
        recomendacao.id = dados.id;
        this.recomendacoes.push(recomendacao);
        this.listaRecomendacoesAtualizada.next([...this.recomendacoes]);
        this.router.navigate(['/']);
      }
    )
  }

  getListaDeRecomendacoesAtualizadaObservable() {
    return this.listaRecomendacoesAtualizada.asObservable();
  }

  removerRecomendacao(id: string): void {
    this.httpClient.delete(`http://localhost:3000/api/recomendacoes/${id}`).subscribe(() => {
      this.recomendacoes = this.recomendacoes.filter((reco) => {
        return reco.id !== id
      });
      this.listaRecomendacoesAtualizada.next([...this.recomendacoes]);
    });
  }
}
