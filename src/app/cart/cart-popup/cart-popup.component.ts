import { CartBaseComponent } from './../cart-base.component';
import { CartService } from './../../services/cart.service';
import { Component, ElementRef, HostBinding, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-cart-popup',
  templateUrl: './cart-popup.component.html',
  styleUrls: ['./cart-popup.component.css'],
  host: {
    '(document:click)': 'onPageClick($event)',
  }
})
export class CartPopupComponent extends CartBaseComponent implements OnInit {
  @HostBinding("class.visible") isVisible:boolean = true;

  constructor(public cartService: CartService,
              private elementRef: ElementRef)
  {
    super(cartService);
   }

  ngOnInit(): void {
    this.cartService.toggleCartSubject
      .subscribe(res => this.isVisible = res);
  }

  onPageClick = (event) => {
    if (this.isVisible && !this.elementRef.nativeElement.contains(event.target)  && event.target.className !== 'cart-remove') {
      this.cartService.toggleCart();
    }
  }

}
