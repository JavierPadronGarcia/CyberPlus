import { Component, Input, OnInit } from '@angular/core';
import { Element } from 'src/app/shared/interfaces/element';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public element: Element;
  imagesURL: string = "../../../../assets/images/"
  imageName: string = ""

  ngOnInit(): void {
    this.imageName = this.element.image
  }

  constructor() {
    this.element = {
      title: "",
      price: 0,
      image: "",
      discount: 0,
      prevPrice: 0
    }
  }
}
