import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {
  depoimento: string = `Minha viagem com a Jornada foi incrível! Recomendo muito a agência para quem busca uma experiência emocionante e personalizada a partir das nossas necessidades.`

  autoria: string = 'Mariana Faustino'
  @Input() src: string = ''
}
