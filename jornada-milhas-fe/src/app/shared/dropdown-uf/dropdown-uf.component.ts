import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { UnidadefederativaService } from 'src/app/core/services/unidadefederativa.service';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  @Input() controle!: FormControl;
  @Input() placeholder: string = '';

  unidadesFederativas: UnidadeFederativa[] = [];
  estadosFiltrados$?: Observable<UnidadeFederativa[]>;

  constructor(private service: UnidadefederativaService){}

  ngOnInit(): void {
    this.service.listar().subscribe(
      dados => {
        this.unidadesFederativas = dados;
      })
    this.estadosFiltrados$ = this.controle.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }

  filtrarUfs(value: string | UnidadeFederativa): UnidadeFederativa[]{
    const nomeUf = typeof value === 'string' ? value : value?.nome;
    const valorFiltrado = nomeUf?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result;
  }

  displayFn(estado: UnidadeFederativa): string {
    return estado?.nome || '';
  }
}
