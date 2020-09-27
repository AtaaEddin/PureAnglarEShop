import { ProductItem } from './../model/ProductItem';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    public getProducts(): ProductItem[] {
        return [
            {Title: 'T-Shirt', Brand: 'GUCCI', Price: 20, Image:'https://www.sporset.com/UserFiles/ProductImages/0/65687206/orj/puma-ftblplay-erkek-tisort-65687206-siyah-175006.jpg',
        Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque at? Quisquam optio libero vitae. Voluptate porro, molestias quasi dolorem beatae odit? Quae consequatur odit beatae autem optio, enim fugit?'},
            {Title: 'Long-Shirt', Brand: 'GUCCI', Price: 40, Image:'https://productimages.hepsiburada.net/s/29/600-800/10268495151154.jpg ',
        Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque at? Quisquam optio libero vitae. Voluptate porro, molestias quasi dolorem beatae odit? Quae consequatur odit beatae autem optio, enim fugit?'},
            {Title: 'Summar-Jeans', Brand: 'RALPH LAUREN', Price: 70, Image:'https://i.pinimg.com/originals/a9/cf/01/a9cf0145425cbeeaf2f80aea7a3d767b.jpg',
        Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque at? Quisquam optio libero vitae. Voluptate porro, molestias quasi dolorem beatae odit? Quae consequatur odit beatae autem optio, enim fugit?'},
            {Title: 'Long-Trousers', Brand: 'RALPH LAUREN', Price: 100, Image:'https://wardrobeoftomorrow.com/wp-content/uploads/2020/02/long-trosures-03.jpg',
        Description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, atque at? Quisquam optio libero vitae. Voluptate porro, molestias quasi dolorem beatae odit? Quae consequatur odit beatae autem optio, enim fugit?'},
          ];
    }
}