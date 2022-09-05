import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ssglow-app';

  constructor(){}

  ngOnInit() {}

  url:string = "../assets/product-1.JPG";
  changeImage(event:any) {
    this.url = event.target.src;
  }
}
