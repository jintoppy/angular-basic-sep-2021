import { Component, OnInit } from '@angular/core';
import { SlideshowEvent } from '../slideshow/slideshow.component';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  catImgUrls:string[]=[]

  dogImgUrls:string[]=[]

  catSlideshowCompleted = false;
  dogSlideshowCompleted = false;

  onCatStart(){
    this.catSlideshowCompleted = false;
  }
  onCatComplete(){
    this.catSlideshowCompleted = true;
  }

  onDogComplete(){
    this.dogSlideshowCompleted = true;
  }

  onDogSlideshowEvent(evnt: SlideshowEvent){
    console.log(evnt);
  }

  constructor(private service:AppService) {
  }

  ngOnInit(): void {
    this.catImgUrls = this.service.getCats();
    this.dogImgUrls = this.service.getDogs();
  }

}
