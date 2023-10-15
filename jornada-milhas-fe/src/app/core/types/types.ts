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

export interface Passagem{
  tipo: string;
  precoIda: number;
  precoVolta: number;
  taxaEmbarque: number;
  conexoes: number;
  tempoVoo: number;
  origem: UnidadeFederativa;
  destino: UnidadeFederativa;
  companhia: Companhia;
  dataIda: Date;
  dataVolta: Date;
  total: number;
  orcamento: Orcamento[];
}
export interface Resultado {
  paginaAtual: number;
  ultimaPagina: number;
  total: number;
  precoMin: number;
  precoMax: number;
  resultado: Passagem[];
}

export interface Companhia{
  id: string;
  nome: string;
}

export interface Orcamento{
  descricao: string;
  preco: number;
  taxaEmbarque: number;
  total: number
}

export interface DadosBusca{
  somenteIda?: boolean;
  passageirosAdultos?: number;
  passageirosCriancas?: number;
  passageirosBebes?: number;
  tipo?: string;
  origemId?: number;
  destinoId?: number;
  precoMin?: number;
  precoMax?: number;
  conexoes?: number;
  tempoVoo?: number;
  dataIda: string;
  dataVolta?: string;
  companhiasId?: number[];
  pagina: number;
  porPagina: number;
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
