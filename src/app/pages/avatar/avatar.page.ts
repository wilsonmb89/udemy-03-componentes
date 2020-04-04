import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Avatar';
  }

}
