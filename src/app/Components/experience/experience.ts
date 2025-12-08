import {AfterViewInit, Component, OnInit,  } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { RouterLink } from "@angular/router";
import Aos from 'aos';
@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  schemas:[]
})
export class Experience implements OnInit,AfterViewInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
  ngAfterViewInit(): void {
      Aos.init()
  }
}



