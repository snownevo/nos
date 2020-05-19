import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  
  sliderOpts={
    zoom:false,
    slidesPerView:4,
    centeredSlides:false,
    spaceBeetween:10  
  };

  constructor() { }

  ngOnInit() {
  }

}
