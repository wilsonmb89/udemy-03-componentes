import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.page.html',
  styleUrls: ['./botones.page.scss'],
})
export class BotonesPage implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Botones';
  }

}
