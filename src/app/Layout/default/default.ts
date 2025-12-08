import { Component, inject } from '@angular/core';
import { Navbar } from "../../Components/navbar/navbar";
import { Home } from "../../Components/home/home";
import { About } from "../../Components/about/about";
import { Work } from "../../Components/work/work";
import { Experience } from "../../Components/experience/experience";
import { Contact } from "../../Components/contact/contact";
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-default',
  imports: [Navbar, Home, About, Work, Experience, Contact, RouterOutlet],
  templateUrl: './default.html',
  styleUrl: './default.css',
})
export class Default {
}
