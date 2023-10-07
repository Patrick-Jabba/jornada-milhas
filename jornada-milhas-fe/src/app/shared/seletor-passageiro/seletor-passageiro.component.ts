import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SeletorPassageiroComponent),
    multi: true
  }]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  quantidadePassageiros: number = 0;

  onChange = (value: number) => {}
  onTouch = () => {}

  writeValue(value: any): void {
    this.quantidadePassageiros = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  

  decrementar() {
    if(this.quantidadePassageiros > 0){
      this.quantidadePassageiros -= 1;
      this.onChange(this.quantidadePassageiros);
      this.onTouch();
    }
  }

  incrementar() {
    this.quantidadePassageiros += 1;
    this.onChange(this.quantidadePassageiros);
    this.onTouch();
    console.log(this.quantidadePassageiros)
  }
}
