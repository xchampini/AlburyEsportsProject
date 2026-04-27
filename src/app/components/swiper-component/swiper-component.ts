import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  contentChildren,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  input,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { Swiper } from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';

Swiper.use([Autoplay, Navigation]);

@Component({
  selector: 'app-swiper-component',
  imports: [NgTemplateOutlet],
  templateUrl: './swiper-component.html',
  styleUrl: './swiper-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
  swiper = viewChild.required<ElementRef>('swiper');
  items = contentChildren('swiperItem', { read: TemplateRef });
  public readonly loop = input<boolean>(true);
}
