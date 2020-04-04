import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  data: Array<any> = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    console.log('Cargando siguientes...');

    setTimeout(() => {
      if (this.data.length > 50) {
        event.target.disabled = true;
        this.infiniteScroll.disabled = true;
        return;
      }
      this.data.push(...Array(20));
      event.target.complete();
    }, 1000);
  }

}
