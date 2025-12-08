import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Portfolio } from "../../ReUsableComp/portfolio/portfolio";
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-work',
  imports: [Portfolio],
  templateUrl: './work.html',
  styleUrl: './work.css',
})
export class Work implements AfterViewInit {

  ngAfterViewInit(): void {
      AOS.init()
  }
}
