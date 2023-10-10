import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
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
  @Input() options: UnidadeFederativa[] = [];
  estadosFiltrados$?: Observable<UnidadeFederativa[]>;

  ufs: UnidadeFederativa[] = [];

  options$?: Observable<UnidadeFederativa[]>

  constructor(private service: UnidadefederativaService){}

  ngOnInit(): void {
    this.service.listar().subscribe(
      dados => {
        this.ufs = dados;
      }
    )

    // = this.controle.valueChanges.pipe(
    //   startWith(''),
    //   map(value => this.filtrarUfs(value))
    // )
  }

  filtrarUfs(value: string): UnidadeFederativa[]{
    const valorFiltrado = value?.toLowerCase();
    const result = this.ufs.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )

    return result;
  }
}
