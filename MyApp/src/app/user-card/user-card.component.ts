import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent  implements OnInit {
  @Input() imagen: string ="";//parametro de imagen que recibe una ruta
  @Input() usuario: string="";//parametro de descripción recibe un texto
  @Input() informacion: string="";//parametro de descripción recibe un texto
  constructor() { }

  ngOnInit() {}

}
