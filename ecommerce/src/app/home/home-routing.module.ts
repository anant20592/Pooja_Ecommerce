import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "cart", component: CartComponent },
  { path: "wishlist", component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
