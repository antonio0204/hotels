import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageWeb',
  templateUrl: './pageWeb.component.html'
})
export class PageWebComponent implements OnInit {

    saludo: any;

    constructor() {}

    ngOnInit() {
      this.saludo = 'Hello'
    }
}
