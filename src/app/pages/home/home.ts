import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SwiperComponent } from '../../components/swiper-component/swiper-component';
import { ContactUs } from '../contact-us/contact-us';

@Component({
  selector: 'app-home',
  imports: [RouterLink, SwiperComponent, NgOptimizedImage, ContactUs],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
