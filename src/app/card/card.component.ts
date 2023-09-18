import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() nombre: string = '';
  @Input() ubicacion: string = '';
  @Input() urlImg: string = '';
  @Input() id: string = '';
}
