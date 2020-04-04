import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string;

  constructor() { }

  usuario = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Submit clicked!');
    console.log('Usuario:', this.usuario);
  }

}
