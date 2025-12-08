import { Component, Input } from '@angular/core';
import { Navbar } from "../../Components/navbar/navbar";

@Component({
  selector: 'app-exp-page',
  imports: [Navbar],
  templateUrl: './exp-page.html',
  styleUrl: './exp-page.css',
})
export class ExpPage {
  @Input() title!:string
  @Input() comp!:string
  @Input() empType!:string
  @Input() location!:string
  @Input() period!:string
  @Input() compDesc!:string
  @Input() roleDesc!:string
  @Input() CR!:string
}
