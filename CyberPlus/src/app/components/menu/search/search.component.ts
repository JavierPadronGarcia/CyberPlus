import { Component } from '@angular/core';
import { Element } from 'src/app/shared/interfaces/element';
import { AllproductsService } from 'src/app/shared/services/allproducts.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {

  searcher: string;
  products: Element[];

  constructor(private allproductsService: AllproductsService) {
    this.searcher = "";
    this.getAllProducts();
  }

  getAllProducts() {
    this.allproductsService.getAllProducts().subscribe(
      (data) => {
        this.products = data.allProducts;
      },
      (error) => {
        this.products = [];
        console.log("error al solicitar todos los productos, detalles: " + error)
      },
      () => {
        console.log("Petición realizada correctamente")
      }
    )
  }

  filterProducts() {
    if (this.searcher.trim() === '') return this.products;
    return this.products.filter(product => {
      return product.title.toLowerCase().includes(this.searcher.toLowerCase())
    })
  }

}
