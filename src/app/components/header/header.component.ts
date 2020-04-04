import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  private _titulo: string;

  @Input() set titulo(titulo: string) {
    this._titulo = (titulo && titulo.trim()) || 'Componente Ionic';
  }

  get titulo(): string { return this._titulo; }

  constructor() { }

  ngOnInit() {}

}
