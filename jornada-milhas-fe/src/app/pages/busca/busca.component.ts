import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { DadosBusca, Destaques, Passagem } from 'src/app/core/types/types';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit{
  passagens!: Passagem[];
  destaques?: Destaques;

  constructor(
    private passagemService: PassagensService,
    private formBuscaService: FormBuscaService
    ){}

  ngOnInit(): void {
    const buscaPadrao : DadosBusca = {
      dataIda: new Date().toISOString(),
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdultos: 1,
      tipo: "Executiva"
    }

    const busca = this.formBuscaService.formEstaValido ? this.formBuscaService.obterDadosDeBusca() : buscaPadrao;

    this.passagemService.getPassagens(busca)
    .pipe(take(1))
    .subscribe(resposta => {
            this.passagens = resposta.resultado;
            this.formBuscaService.formBusca.patchValue({
              precoMin: resposta.precoMin,
              precoMax: resposta.precoMax
            })
          })
  }

  busca(event: DadosBusca){
    console.log('filtro =>', event)
    this.passagemService.getPassagens(event).subscribe(resposta => {
      this.passagens = resposta.resultado;
    })
  }

  obterDestaques(){
    this.destaques = this.passagemService.obterPassagensDestaques(this.passagens);
  }
}
