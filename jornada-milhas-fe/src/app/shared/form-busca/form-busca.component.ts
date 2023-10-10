import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';
import { UnidadefederativaService } from 'src/app/core/services/unidadefederativa.service';
import { UnidadeFederativa } from 'src/app/core/types/types';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  // @Output() aoBuscar = new EventEmitter<Partial<FormBuscaValue>>();

  ufs: UnidadeFederativa[] = []

  // tipos: string[] = ['Econômica', 'Executiva']

  constructor(
    public formBuscaService: FormBuscaService,
    private ufService: UnidadefederativaService
  ) {

    this.ufService.listar()
      .subscribe(data => {
        this.ufs = data;
      })
  }

  buscar() {
    console.log(this.formBuscaService.formBusca.value, "🔥🔥🔥🔥🔥")
  }

  // onSubmit (): void {
  //   this.aoBuscar.emit(this.formBuscaService.formBusca.value);
  // }

}
