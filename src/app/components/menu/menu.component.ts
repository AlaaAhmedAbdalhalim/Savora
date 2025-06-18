import { Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as AOS from 'aos';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  centerImageSrc: string = '/Menu/Pasta.png';
  pizzaImageSrc: string = '/Menu/pizza.png';
  burgerImageSrc: string = '/Menu/burger.png';
  pastaImageSrc: string = '/Menu/Pasta.png';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true
      });
    }
  }


  selectItem(item: any) {
    let temp = this.centerImageSrc;
    switch (item) {
      case 'pizza':
        this.centerImageSrc = this.pizzaImageSrc;
        this.pizzaImageSrc = temp;
        break;


      case 'burger':
        this.centerImageSrc = this.burgerImageSrc;
        this.burgerImageSrc = temp;
        break;


    }

  }



}
