import { Cart } from './../model/Cart';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CartService {
    public cartListSubject = new BehaviorSubject([]);
    public toggleCartSubject = new BehaviorSubject(false);

    toggleCart = () => this.toggleCartSubject.next(!this.toggleCartSubject.getValue());

    AddToCart = (cart: Cart) => {
        const items = this.cartListSubject.getValue();
        const existedItem = items.find(c => c.item.Title === cart.item.Title);
        if(existedItem) { existedItem.quantity += cart.quantity; }
        else { items.push(cart); }
        this.cartListSubject.next(items);
    }
    removeCart = index => {
        let current = this.cartListSubject.getValue();
        current.splice(index,1);
        this.cartListSubject.next(current);
    }
    reloadCart = (cartList) => {
        this.cartListSubject.next(cartList);
    };
}
