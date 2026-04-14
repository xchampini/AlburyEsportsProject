import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChildren, CUSTOM_ELEMENTS_SCHEMA, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-swiper-component',
  imports: [NgTemplateOutlet],
  templateUrl: './swiper-component.html',
  styleUrl: './swiper-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperComponent {
  items = contentChildren('swiperItem', { read: TemplateRef });
}
