import { Component, OnInit } from '@angular/core';
import {Product} from "../model/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product = new Product(0,"0","0",0);

  products: Product[] = []
  constructor() { }

  ngOnInit(): void {
  }

  createProduct(){
    let productNew = new Product(this.products.length,this.product.name,this.product.img,this.product.price);
    this.products.push(productNew);
  }

  findProduct(index: number): number{
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id==index)
        return  i;
    }
    return -1;
  }

  deleteProduct(id: number){
    let index1= this.findProduct(id);
    this.products.splice(index1,1);
  }

  editProduct(id2: number) {
    let productEdit = new Product(id2, this.product.name, this.product.img, this.product.price);
    this.products.splice(this.findProduct(id2), 1, productEdit);
  }

  //   deleteProduct(id:number){
  //   this.products.splice(id)
  // }

  // editProduct(id){
  //   this.product
  // }
}
