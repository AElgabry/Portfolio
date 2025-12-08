import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

  @Input() image!:string
  @Input() title!:string
  @Input() description!:string
  @Input() details!:string
  @Input() demo!:string
  @Input() logo!:string


}
