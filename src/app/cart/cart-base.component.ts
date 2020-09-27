import { Cart } from '../model/Cart';
import { CartService } from './../services/cart.service';

export class CartBaseComponent {
    public cartList:Cart[];
    public totalPrice: number;

    constructor(protected cartService: CartService) 
    {
        this.loadCart();
    }

    loadCart = () => {
        this.cartService.cartListSubject
            .subscribe(res => {
              this.cartList = res;
              let total = 0;
              for(const cart of this.cartList)
              {
                total += cart.quantity * cart.item.Price;
              }
              this.totalPrice = total;
            });
      }
      removeFromCart = index => this.cartService.removeCart(index);
}