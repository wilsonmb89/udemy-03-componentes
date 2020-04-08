import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  data: Observable<any>;

  @ViewChild('lista', {static: false}) listaSliding: IonList;

  constructor(
    private dataService: DataService,
    private toastController: ToastController
  ) { }

  ngOnInit() {
    this.data = this.dataService.getUsers();
  }

  share(item) {
    this.listaSliding.closeSlidingItems();
    this.showToast('Shared');
  }

  delete(item) {
    this.listaSliding.closeSlidingItems();
    this.showToast('Eliminado');
  }

  favorite(item) {
    this.listaSliding.closeSlidingItems();
    this.showToast('Seleccionado Favorito');
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      animated: true,
      message,
      duration: 2000,
      color: 'light',
      mode: 'ios'
    });
    toast.present();
  }
}
