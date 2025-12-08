import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  imports: [],
  templateUrl: './social.html',
  styleUrl: './social.css',
})
export class Social {

@Input() name!:string
@Input() link!:string
@Input() logo!:string

}
