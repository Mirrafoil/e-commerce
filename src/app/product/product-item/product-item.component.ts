import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

	public product: Product;
	public productClasses;

  constructor() { }

  ngOnInit() {
  	this.products = [
  	new Product('Bananas', 2, 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1024-80.jpg', 0, false),
  	new Product('Apples', 3, 'https://e3.365dm.com/19/12/2048x1152/skynews-apples-istock_4867989.jpg?bypass-service-worker&20191216110518', 0, false),
  	new Product('Kiwis', 4, 'https://recipematic.com/wp-content/uploads/2019/07/How-to-Choose-Store-How-to-Use-Kiwi-Fruit-Benefits-of-Kiwi-Fruit-Calories-and-Nutrition-Facts-tips.jpg', 0, false)
  	];
  	this.productClasses = {
  		"OnSale": true,
  		"NotOnSale": true,
  		"product-container": true
  	};
  }

  toggleSale(event, index) {
  	console.log('toggle sale', event, index);
  	this.products[index].sale = !this.products[index].sale;
  }

  addQuantity(event, index) {
  	console.log('adding to basket')
  	this.products[index].quantity++
  }

  subQuantity(event, index) {
  	if(this.products[index].quantity > 0) {
	  	console.log('taking out of basket')
	  	this.products[index].quantity--
	  }
  }

}
