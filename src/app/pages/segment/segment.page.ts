import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild('comicsSegment', {static: true}) comicsSegment: IonSegment;

  superHeroes: Observable<any>;
  heroesFilterValue: string;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.heroesFilterValue = this.comicsSegment.value = '';
    this.superHeroes = this.dataService.getSuperHeroesOpts();
  }

  segmentChanged(ev: any) {
    this.heroesFilterValue = ev.detail.value;
  }
}
