import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class Skills implements AfterViewInit{

ngAfterViewInit(): void {
    const swiper = new Swiper('.mySwiper', {
      loop: true, 
      autoplay: {
        delay: 0, 
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      },
      slidesPerView: 4,
      speed: 3500,
      freeMode: true,
      allowTouchMove: false,
    });

    // Make completely non-interactive
    const swiperEl = document.querySelector('.mySwiper') as HTMLElement;
    if (swiperEl) {
      swiperEl.style.pointerEvents = 'none';
      swiperEl.style.userSelect = 'none';
    }
}
}