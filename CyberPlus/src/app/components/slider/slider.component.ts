import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Element } from 'src/app/shared/interfaces/element';
import { NotifiactionsService } from 'src/app/shared/services/notifications.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  @Input() logged: number;
  @Input() elements: Element[];
  @Input() sliderIndex: number;

  @Output() product = new EventEmitter<Element>();

  slideIndex: number = 1;

  constructor(private notificationService: NotifiactionsService) {
    notificationService.chargeSlides$.subscribe(() => {
      this.showSlides(1);
    })
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n: number) {
    let slides = document.getElementsByClassName('card-component' + this.sliderIndex) as HTMLCollectionOf<HTMLElement>;
    let i;

    if (n > slides.length) { this.slideIndex = 1; }
    if (n < 1) { this.slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[this.slideIndex - 1].style.display = 'block';
  }

  notifyInsert(product: Element) {
    this.product.emit(product);
  }
}
