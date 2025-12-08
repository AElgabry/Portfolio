import { AfterViewInit, Component} from '@angular/core';
import Aos from 'aos';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit{

  ngAfterViewInit(): void {
      Aos.init()
  }

}
