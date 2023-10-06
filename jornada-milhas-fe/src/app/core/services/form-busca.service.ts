import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBusca } from '../types/types';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root'
})
export class FormBuscaService {
  formBusca: FormGroup<FormBusca>;

  constructor(private dialog: MatDialog) {
    this.formBusca = new FormGroup<FormBusca>({
      somenteIda: new FormControl(false),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
      tipo: new FormControl('Executiva'),
      origem: new FormControl(),
      destino: new FormControl(),
      dataIda: new FormControl(),
      dataVolta: new FormControl(),
    });
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

    console.log(tipo)
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }
}
