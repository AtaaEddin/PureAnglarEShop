import { ProductItem } from './../model/ProductItem';
import { CartService } from './../services/cart.service';
import { ProductService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: ProductItem;
  public quantity = 1;

  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.params
      .subscribe( res => {
        this.getProduct(res.title);
      });
  }

  getProduct = (title: string) => {
    this.product = this.productService.getProducts().find(item => item.Title === title);
  }

  changeQuantity = (newQuantity) => {
    this.quantity = newQuantity;
  }

  addToCart = (product: ProductItem) => {
    if (this.quantity) { this.cartService.AddToCart({item: product, quantity: this.quantity}); }
  }
}
