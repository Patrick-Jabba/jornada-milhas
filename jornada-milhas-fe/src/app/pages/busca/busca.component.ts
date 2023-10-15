import { Component, OnInit } from '@angular/core';
import { PassagensService } from 'src/app/core/services/passagens.service';
import { Passagem } from 'src/app/core/types/types';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']
})
export class BuscaComponent implements OnInit{
  passagens!: Passagem[];

  constructor(private passagemService: PassagensService){}

  ngOnInit(): void {
    const buscaPadrao = {
      data: new Date().toISOString,
      pagina: 1,
      porPagina: 25,
      somenteIda: false,
      passageirosAdutos: 1,
      tipo: "Executiva"
    }

    this.passagemService.getPassagens(buscaPadrao).subscribe(
      resposta => {
        this.passagens = resposta.resultado;
        console.log(this.passagens);
      })
  }
}
