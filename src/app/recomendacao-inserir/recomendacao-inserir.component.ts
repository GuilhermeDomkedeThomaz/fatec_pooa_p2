import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecomendacaoService } from '../recomendacao/recomendacao.service';

@Component({
  selector: 'recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css']
})
export class RecomendacaoInserirComponent {

  constructor(public recomendacaoService: RecomendacaoService, public route: ActivatedRoute) {
  }

  public estaCarregando: boolean = false;

  incluirRecomendacao(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.estaCarregando = true;

    this.recomendacaoService.incluirRecomendacao(form.value.descricao);

    form.resetForm();
  }
}
