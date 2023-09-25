import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { newsObj } from './news';
import gsap from 'gsap';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements AfterViewInit{

  news: News[] = newsObj;
  paragraphText: string = "";

  @ViewChild("paragraph")
  paragraphElement: ElementRef;

  ngAfterViewInit(): void
  {
    gsap.fromTo(
      ".title",
      {
        opacity: 0,
        x: -110
      },
      {
        opacity: 1,
        x: 170
      }
    )
    .delay(1);
  }

  writeEffect(): void
  {
  }
}

interface News{
  title: string,
  description: string,
  date: string
}