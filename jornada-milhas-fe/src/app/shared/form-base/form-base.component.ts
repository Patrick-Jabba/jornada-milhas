import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UnidadeFederativa } from 'src/app/core/types/types';

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

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.cadastroForm = this.formBuilder.group({
      nome: [null, [Validators.required]],
      nascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      confirmarEmail: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(3)]],
      confirmarSenha: [null, [Validators.required, Validators.minLength(3)]],
      genero: ['outro'],
      telefone: [null, [Validators.required]],
      cidade: [null, [Validators.required]],
      aceitarTermos: [false, [Validators.requiredTrue]],
      estado: this.unidadeFederativaControl,
    });
  }

  executarAcao(){
    this.acaoClique.emit();
  }

}
