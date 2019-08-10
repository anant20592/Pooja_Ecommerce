import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItemList: any = [];
  product: any = []
  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this.product = this._homeService.productList
    this.getCartItem();
  }


  getCartItem(): void {
    let item: any = [];
    item = JSON.parse(this._homeService.getItemFromCart('cartItem'));
    if (item.length > 0) {

      item.forEach(element => {
        let item = this.product.forEach(element2 => {
          if (element2.id == element) {
            this.cartItemList.push(element2)
          }
        });
      });
    }
  }
}
