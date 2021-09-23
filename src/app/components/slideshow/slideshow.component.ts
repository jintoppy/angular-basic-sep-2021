import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type SlideshowEvent = {
  type: string;
  count: number;
}

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

  @Output()
  onStart: EventEmitter<void> = new EventEmitter();

  @Output()
  onStatusChange: EventEmitter<SlideshowEvent> = new EventEmitter<SlideshowEvent>();

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
      this.onStatusChange.emit({type: 'completed', count: this.imgUrls.length});
    }
  }

  onPrev(){
    if(this.activeIndex > 0){
      this.activeIndex--;
    }

    if(this.activeIndex === 0){
      this.onStart.emit();
      this.onStatusChange.emit({type: 'started', count: this.imgUrls.length});
    }
    
  }

}
