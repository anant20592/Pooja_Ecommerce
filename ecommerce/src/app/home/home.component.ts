import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHome: any;

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    this._homeService.getHome.subscribe(x => {
      this.showHome = x;
    })
  }

  urlNavigation(type: any): void {
    if (type == 'home') {
      this._homeService.setHome(true)
    } else {
      this._homeService.setHome(false)
    }
  }
}
