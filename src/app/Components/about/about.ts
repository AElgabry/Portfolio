import { AfterViewInit, Component } from '@angular/core';
import { Skills } from "../skills/skills";
import Aos from 'aos';

@Component({
  selector: 'app-about',
  imports: [Skills],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {

ngAfterViewInit(): void {
    Aos.init()
}

}
