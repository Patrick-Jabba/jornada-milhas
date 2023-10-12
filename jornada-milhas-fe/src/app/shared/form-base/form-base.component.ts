import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from 'src/app/core/services/formulario.service';
import {UnidadeFederativa } from 'src/app/core/types/types';
import { FormValidations } from '../form-validations';

@Component({
  selector: 'app-form-base',
  templateUrl: './form-base.component.html',
  styleUrls: ['./form-base.component.scss']
})
export class FormBaseComponent implements OnInit {
  cadastroForm!: FormGroup
  unidadeFederativaControl = new FormControl<UnidadeFederativa | null>(null, Validators.required);

  @Input() perfilComponent!: boolean;
  @Output() acaoClique: EventEmitter<any> = new EventEmitter<any>

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ){}


  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      nascimento: [null, [Validators.required]],
      cpf: ['1333', [Validators.required]],
      email: ['123@EmailValidator.com', [Validators.required, Validators.email]],
      confirmarEmail: ['123@EmailValidator.com', [Validators.required, Validators.email, FormValidations.equalTo('email')]],
      senha: ['1234556', [Validators.required, Validators.minLength(3)]],
      confirmarSenha: ['1234556', [Validators.required, Validators.minLength(3), FormValidations.equalTo('senha')]],
      genero: ['outro'],
      telefone: ['219999', [Validators.required]],
      cidade: ['Tere', [Validators.required]],
      aceitarTermos: [false, [Validators.requiredTrue]],
      estado: this.unidadeFederativaControl,
    });

    this.formularioService.setDadosDoFormularioDeCadastro(this.cadastroForm)
  }

  executarAcao(){
    this.acaoClique.emit();
  }

}
