import { Component, Input } from '@angular/core';
import { Element } from 'src/app/shared/interfaces/element';
import { AllproductsService } from 'src/app/shared/services/allproducts.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('moveDown', [
      state('void', style({ transform: 'translateY(-100%)' })),
      state('*', style({ transform: 'translateY(0)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})

export class SearchComponent {
  searcher: string;
  products: Element[];
  showDetails: boolean = false;


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

  checkDetails() {
    if (!this.showDetails) {
      this.showDetails = true;
    }
  }
}
