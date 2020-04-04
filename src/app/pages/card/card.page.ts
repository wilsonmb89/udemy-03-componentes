import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Cards';
  }

}
