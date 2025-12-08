import { AfterViewInit, Component } from '@angular/core';
import { Social } from "../../ReUsableComp/social/social";
import Aos from 'aos';

@Component({
  selector: 'app-contact',
  imports: [Social],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {

  ngAfterViewInit(): void {
      
    Aos.init()
  }
}
