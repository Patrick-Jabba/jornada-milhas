import { FormControl } from "@angular/forms";

export interface Promocao {
  id: number,
  destino: string,
  imagem: string,
  preco: number
}

export interface Depoimento {
  id: number,
  texto: string,
  autor: string,
  avatar: string
}

export interface PessoaUsuaria {
    nome: string,
    nascimento: string,
    cpf: string,
    telefone: string,
    email: string,
    senha: string,
    genero: string,
    cidade: string,
    estado:  UnidadeFederativa
}

export interface UnidadeFederativa {
  id: number,
  nome: string,
  sigla: string
}

export interface FormBusca {
  somenteIda: FormControl<boolean | null>;
  adultos: FormControl<number | null>;
  criancas: FormControl<number | null>;
  bebes: FormControl<number | null>;
  tipo: FormControl<string | null>;
  origem: FormControl<UnidadeFederativa | null>;
  destino: FormControl<UnidadeFederativa | null>;
  dataIda: FormControl<Date | null>;
  dataVolta: FormControl<Date | null>;
}

export interface FormBuscaValue {
  somenteIda: boolean | null;
  adultos: number | null;
  criancas: number | null;
  bebes: number | null;
  tipo: string | null;
  origem: UnidadeFederativa | null;
  destino: UnidadeFederativa | null;
  dataIda: Date | null;
  dataVolta: Date | null;
}
