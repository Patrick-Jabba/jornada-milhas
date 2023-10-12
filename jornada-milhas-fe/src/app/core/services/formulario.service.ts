import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  cadastroForm: FormGroup | null = null;

  getDadosDoFormularioDeCadastro(): FormGroup | null{
    return this.cadastroForm;
  }

  setDadosDoFormularioDeCadastro(form: FormGroup) {
    this.cadastroForm = form;
  }
}
