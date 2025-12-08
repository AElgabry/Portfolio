import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('Portfolio');
   ngOnInit(): void {
    initFlowbite();
    this.scroll()

  }

  private readonly viewportScroller = inject(ViewportScroller)
scroll()
{
  this.viewportScroller.setOffset([0,250])
}

}
