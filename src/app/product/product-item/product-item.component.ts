import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

	public name: string;
	public price: number;
	public imageurl: string;
	public quantity: number;
	public sale: boolean;

  constructor() { }

  ngOnInit() {
  	this.name = 'Bananas'
  	this.price = 2
  	this.imageurl = 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1024-80.jpg'
  	this.quantity = 0
  	this.sale = false
  }

  addQuantity() {
  	console.log('adding to basket')
  	this.quantity++
  }

  subQuantity() {
  	if(this.quantity > 0) {
	  	console.log('taking out of basket')
	  	this.quantity--
	  }
  }

  toggleSale() {
  	console.log('toggle sale')
  	this.sale = !this.sale
  }

}
