import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @Input()
  imgUrls: string[]=[]
  activeIndex = 0;

  @Output()
  onComplete: EventEmitter<void> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  onNext(){
    if(this.activeIndex < this.imgUrls.length - 1){
      this.activeIndex++;
    }
    if(this.activeIndex === this.imgUrls.length - 1){
      // slideshow is completed;
      this.onComplete.emit();
    }
  }

  onPrev(){
    if(this.activeIndex > 0){
      this.activeIndex--;
    }

    if(this.activeIndex === 0){
      //slideshow beginning
    }
    
  }

}
