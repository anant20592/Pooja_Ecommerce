import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishItemList: any = [];
  product: any = [];

  constructor(private _homeService: HomeService) { }

  ngOnInit() {

    this.product = this._homeService.productList
    this.getWishListItem();
  }

  getWishListItem(): void {
    let item: any = [];
    item = JSON.parse(this._homeService.getItemFromCart('wishListItem'));
    if (item.length > 0) {

      item.forEach(element => {
        let item = this.product.forEach(element2 => {
          if (element2.id == element) {
            this.wishItemList.push(element2)
          }
        });

      });
    }
  }
}
