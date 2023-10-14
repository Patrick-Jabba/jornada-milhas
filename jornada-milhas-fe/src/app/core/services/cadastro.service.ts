import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaUsuaria } from '../types/types';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  cadastrar(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria>{
    return this.httpClient.post<PessoaUsuaria>(`${this.apiUrl}/auth/cadastro`, pessoaUsuaria)
  }

  buscarCadastro(): Observable<PessoaUsuaria>{
    return this.httpClient.get<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`)
  }

  editarCadastro(pessoaUsuaria: PessoaUsuaria): Observable<PessoaUsuaria>{
    return this.httpClient.patch<PessoaUsuaria>(`${this.apiUrl}/auth/perfil`, pessoaUsuaria)
  }

}
