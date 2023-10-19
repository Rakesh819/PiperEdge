import { Component , OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products :any[] = [];
  cart: any[] = [];
  total : number = 0;
  discountedPrices:number=0; 
  filteredProducts: any[]=[] ; 
  selectedVendor: string = ''; 
  selectedDiscount: number | undefined;
  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProduct().subscribe((data: any)=>{
      this.products =data;
    });
  }

  addToCart(product:any){
    this.cart.push(product);
    this.calculateTotal();
  }

  removeFromCart(item:any){
    const index = this.cart.indexOf(item);
    if(index !== -1){
      this.cart.splice(index,1);
      this.calculateTotal();
    } 
  }

  calculateTotal(){
    this.total = this.cart.reduce((acc,product)=>acc + product.price - product.discount, 0);
  }

  
}
