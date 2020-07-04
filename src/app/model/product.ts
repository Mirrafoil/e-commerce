export class Product {

  	constructor(public name: string,
	          public price: number,
	          public imageurl: string,
	          public quantity: number,
	          public sale: boolean) {}
              
	isOnSale(): boolean {
	return this.sale == true;
	}
}