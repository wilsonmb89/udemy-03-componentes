import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit, OnDestroy {

  albumsList: any[] = [];
  getAlbumsSucription: Subscription;
  textoFiltro: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.getAlbumsSucription = this.dataService.getAlbums().subscribe(
      albumes => {
        this.albumsList = albumes;
      }
    );
    this.textoFiltro = '';
  }

  ngOnDestroy() {
    this.getAlbumsSucription.unsubscribe();
  }

  buscar(event: any) {
    this.textoFiltro = event.detail.value;
  }
}
