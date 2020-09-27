import { Cart } from './../model/Cart';
import { CartService } from './../services/cart.service';
import { ProductService } from './../services/products.service';
import { ProductItem } from './../model/ProductItem';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Items: ProductItem[];

  constructor(private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.load();
  }

  load = () => {
    this.Items = this.productService.getProducts();
  }

  addToCart = (product: ProductItem) => {
    this.cartService.AddToCart({item: product, quantity: 1});
  }

}
