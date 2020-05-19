import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  constructor() { }

  ngOnInit() {
  }

  segmentChanged(ev:any){
    if(ev.detail.value==="login"){
      this.slides.slidePrev();
    }else{
      this.slides.slideNext();
    }
  }

}
