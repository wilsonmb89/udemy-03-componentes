import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;
  @Input() edad: number;

  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  salirModal(hasArguments) {
    if (hasArguments) {
      this.modalController.dismiss({
        hasArguments: true
      });
    } else {
      this.modalController.dismiss();
    }
  }
}
