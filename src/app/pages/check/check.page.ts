import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  titulo: string;
  data = [
    {
    name: 'primary',
    selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'warning',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
  ];

  constructor() { }

  ngOnInit() {
    this.titulo = 'Checkbox';
  }

  printValue(value) {
    console.log('Valor:', value.srcElement.checked);
  }

}
