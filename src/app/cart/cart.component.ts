import { CartBaseComponent } from './cart-base.component';
import { Cart } from './../model/Cart';
import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent extends CartBaseComponent implements OnInit {

  constructor(protected cartService: CartService) 
  {
    super(cartService);
  }

  ngOnInit(): void {
  }

  changeQuantity = (cart, quantity) => {
    cart.quantity = quantity;
    this.cartService.reloadCart(this.cartList);
  }

}
