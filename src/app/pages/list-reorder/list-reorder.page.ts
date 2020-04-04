import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Wonderwoman'];
  disableReorder = false;

  constructor() { }

  ngOnInit() {
  }

  toogleReorder() {
    this.disableReorder = !this.disableReorder;
  }

  reorder(event) {
    this.moverPersonajes(event.detail.from, event.detail.to);
    event.detail.complete();
  }

  moverPersonajes(desde: number, hasta: number) {
    const itemMover = this.personajes.splice(desde, 1)[0];
    this.personajes.splice(hasta, 0, itemMover);
  }

  printPersonajes() {
    console.log('personajes:', this.personajes);
  }

}
