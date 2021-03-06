import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  title = 'Version 11 of Angular — Smaller bundles, CLI APIs, and alignment with the ecosystem ';
  image = 'https://cdn-images-1.medium.com/max/800/1*RAjXU6nFJ_LbUS5nH3acsQ.jpeg';
  prf1 = 'The 11.0.5 release of Angular is here! This is a major release spanning the entire platform, including the framework, Angular Material, and the CLI with synchronized major versions. This release improves application startup time on modern browsers, provides new APIs for tapping into the CLI, and aligns Angular to the ecosystem and more web standards.';
  constructor() { }

  ngOnInit(): void {
  }

}
