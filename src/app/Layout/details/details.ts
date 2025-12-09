import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ExpPage } from "../../ReUsableComp/exp-page/exp-page";
import { ActivatedRoute } from '@angular/router';
import { Navbar } from "../../Components/navbar/navbar";

@Component({
  selector: 'app-details',
  imports: [ExpPage, Navbar],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  
  private readonly activatedRoute = inject(ActivatedRoute)
  cardId!:string|null

  ngOnInit(): void {
  this.test()
}

test() {
  this.activatedRoute.paramMap.subscribe(
    {
      next: (res) => {
        this.cardId = res.get("id");
      },
      error: (err) => {console.log(err);}
    }
  )
}

}
