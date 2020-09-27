import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public cart_num:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartListSubject
      .subscribe(res => this.cart_num = res.length);
  }

  toggleCartPopup = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("hello")
    this.cartService.toggleCart();
  }


}
