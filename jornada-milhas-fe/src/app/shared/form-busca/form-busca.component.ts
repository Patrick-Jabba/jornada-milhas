import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog,
    public formBuscaService: FormBuscaService){}

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%'
    });
  }

  // @Output() aoBuscar = new EventEmitter<Partial<FormBuscaValue>>();


  // ufs: UnidadeFederativa[] = []

  // tipos: string[] = ['Econômica', 'Executiva']

  // constructor(
  //   public formBuscaService: FormBuscaService,
  //   private ufService: UnidadeFederativaService
  // ) {

  //   this.ufService.listar()
  //     .subscribe(data => {
  //       this.ufs = data;
  //     })
  // }
  // onSubmit (): void {
  //   this.aoBuscar.emit(this.formBuscaService.formBusca.value);
  // }

}
