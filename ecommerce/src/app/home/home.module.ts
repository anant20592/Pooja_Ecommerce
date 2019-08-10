import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ListDetailComponent } from './list/list-detail/list-detail.component';
import { HomeService } from './home.service';
import { MaterialModule } from '../shared/material/material.module';
@NgModule({
  declarations: [
    ListComponent,
    CartComponent,
    WishlistComponent,
    ListDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  entryComponents: [ListDetailComponent],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
