import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  
  imgUrls=[]
  activeIndex = 0;
  constructor() { 
  }

  ngOnInit(): void {
  }

  onNext(){
    if(this.activeIndex < this.imgUrls.length - 1){
      this.activeIndex++;
    }
    
  }

  onPrev(){
    if(this.activeIndex > 0){
      this.activeIndex--;
    }
    
  }

}
