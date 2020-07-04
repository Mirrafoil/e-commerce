import { Component, OnInit } from '@angular/core';

import { Product } from '../../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent implements OnInit {

	public product: Product;

  constructor() { }

  ngOnInit() {
  	this.product = new Product('Bananas', 2, 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1024-80.jpg', 0, false);
  }

  toggleSale(event) {
  	console.log('toggle sale', event);
  	this.product.sale = !this.product.sale;
  }

  addQuantity(event) {
  	console.log('adding to basket')
  	this.product.quantity++
  }

  subQuantity(event) {
  	if(this.product.quantity > 0) {
	  	console.log('taking out of basket')
	  	this.product.quantity--
	  }
  }

}
