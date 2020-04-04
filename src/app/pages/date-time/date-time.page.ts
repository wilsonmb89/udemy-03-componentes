import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPickerOptions: any;
  customDate: Date;
  customDayShortNames = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

  constructor() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log('Event:', event);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }

  ngOnInit() {
  }

  printData(data) {
    console.log('Data:', data);
    console.log('Date:', new Date(data.detail.value));
  }

}
