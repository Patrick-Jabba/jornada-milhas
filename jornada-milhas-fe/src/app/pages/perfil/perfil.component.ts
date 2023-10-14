import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/core/services/cadastro.service';
import { FormularioService } from 'src/app/core/services/formulario.service';
import { TokenService } from 'src/app/core/services/token.service';
import { UserService } from 'src/app/core/services/user.service';
import { PessoaUsuaria } from 'src/app/core/types/types';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  titulo = `Olá `;
  textoBotao = "ATUALIZAR";
  perfilComponent = true;
  token = '';
  nome = '';
  cadastro!: PessoaUsuaria;
  form!: FormGroup<any> | null;


  constructor(
    private tokenService: TokenService,
    private userService: UserService,
    private cadastroService: CadastroService,
    private formularioService: FormularioService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.token = this.tokenService.retornarToken();
    this.cadastroService.buscarCadastro().subscribe(
      cadastro => {
        this.cadastro = cadastro;
        this.nome = this.cadastro.nome;
        this.carregarFormulario();
      }
    )
  }

  carregarFormulario() {
    this.form = this.formularioService.getDadosDoFormularioDeCadastro();
    this.form?.patchValue({
      nome: this.cadastro.nome,
      nascimento: this.cadastro.nascimento,
      cpf: this.cadastro.cpf,
      telefone: this.cadastro.telefone,
      email: this.cadastro.email,
      senha: this.cadastro.senha,
      genero: this.cadastro.genero,
      cidade: this.cadastro.cidade,
      estado:  this.cadastro.estado
    })
  }

  atualizar(){
    const dadosAtualizados = {
      nome: this.form?.value.nome,
      nascimento: this.form?.value.nascimento,
      cpf: this.form?.value.cpf,
      telefone: this.form?.value.telefone,
      email: this.form?.value.email,
      senha: this.form?.value.senha,
      genero: this.form?.value.genero,
      cidade: this.form?.value.cidade,
      estado:  this.form?.value.estado
    }

    this.cadastroService.editarCadastro(dadosAtualizados).subscribe({
      next: () => {
        alert('Cadastro editado com sucesso!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        console.log('Erro ao atualizar cadastro', err);
      }
    })
    console.log("PERFIL ATUALIZADO")
  }

  deslogar(){
    this.userService.logout();
    this.tokenService.excluirToken();
    this.router.navigate(['/login'])
    console.log("SAIR")
  }

}
