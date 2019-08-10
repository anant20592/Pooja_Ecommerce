import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  productDetail: any;
  itemInCart: any = [];
  itemInWishList: any = [];

  constructor(public dialogRef: MatDialogRef<ListDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _homeService: HomeService) { }

  ngOnInit() {
    this.productDetail = this.data;
  }


  addToCart(): void {
    this.itemInCart = JSON.parse(this._homeService.getItemFromCart('cartItem'))
    if (this.itemInCart && this.itemInCart != null) {
      this.itemInCart.push(this.productDetail.id);
      this._homeService.setitemInCart('cartItem', JSON.stringify(this.itemInCart));
    } else {
      let y: any = []
      y.push(this.productDetail.id);
      this._homeService.setitemInCart('cartItem', JSON.stringify(y));
    }
    this.dialogRef.close();
  }

  addToWishlist(): void {
    this.itemInWishList = JSON.parse(this._homeService.getItemFromWish('wishListItem'))
    if (this.itemInWishList && this.itemInWishList != null) {
      this.itemInWishList.push(this.productDetail.id);
      this._homeService.setitemInWish('wishListItem', JSON.stringify(this.itemInWishList));
    } else {
      let y: any = []
      y.push(this.productDetail.id);
      this._homeService.setitemInWish('wishListItem', JSON.stringify(y));
    }
    this.dialogRef.close();
  }
}
