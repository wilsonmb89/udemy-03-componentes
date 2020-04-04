import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  data: Observable<any>;

  @ViewChild('lista', {static: false}) listaSliding: IonList;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.data = this.dataService.getUsers();
  }

  share(item) {
    console.log('Share:', item);
    this.listaSliding.closeSlidingItems();
  }

  delete(item) {
    console.log('Delete:', item);
    this.listaSliding.closeSlidingItems();
  }

  favorite(item) {
    console.log('Favorite:', item);
    this.listaSliding.closeSlidingItems();
  }
}
