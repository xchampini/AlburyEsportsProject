import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SwiperComponent } from '../../components/swiper-component/swiper-component';
import { ContactUs } from '../contact-us/contact-us';

@Component({
  selector: 'app-home',
  imports: [SwiperComponent, NgOptimizedImage, ContactUs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
