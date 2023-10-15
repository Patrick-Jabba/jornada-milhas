import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBusca } from '../types/types';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup<FormBusca>;
  tipos: string[] = ['Econômica', 'Executiva']


  constructor(private dialog: MatDialog) {
    const somenteIda = new FormControl(false, [Validators.required]);
    const dataVolta = new FormControl(null, [Validators.required]);

    this.formBusca = new FormGroup<FormBusca>({
      somenteIda,
      origem: new FormControl(null, [Validators.required]),
      destino: new FormControl(null, [Validators.required]),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      tipo: new FormControl('Executiva'),
      dataIda: new FormControl(null, [Validators.required]),
      dataVolta
    });
    somenteIda.valueChanges.subscribe(somenteIda => {
      if(somenteIda) {
        dataVolta.disable();
        dataVolta.setValidators(null);
      } else {
        dataVolta.enable();
        dataVolta.setValidators([Validators.required]);
      }
      dataVolta.updateValueAndValidity;
    })
   }

   obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if(!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`)
    }

    return control as FormControl;
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if(evento.selected){
      this.formBusca.patchValue({
        tipo
      })
    }
  }

  getDescricaoPassageiros(): string {
    let descricao = '';

    const adultos = this.formBusca.get('adultos')?.value;
    if(adultos && adultos > 0) descricao += `${adultos} adulto${adultos > 1 ? 's':''} `;

    const criancas = this.formBusca.get('criancas')?.value;
    if(criancas && criancas > 0) descricao += `e ${criancas} criança${criancas > 1 ? 's':''} `;

    const bebes = this.formBusca.get('bebes')?.value;
    if(bebes && bebes > 0) descricao += `e ${bebes} bebê${bebes > 1 ? 's':''}`;

    return descricao;
  }

  trocarOrigemDestino():void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem
    });
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
      data: {
        tipos: this.tipos,
        formBusca: this.formBusca
      }
    })
  }

  get formEstaValido() {
    return this.formBusca.valid;
  }
}
