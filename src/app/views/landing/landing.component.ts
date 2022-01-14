import { Component, OnInit } from '@angular/core';
import { CopysService } from '../../shared/updateData/copys.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html'
})
export class LandingComponent implements OnInit {

  title = '';
  subtitle = '';


  constructor(public copysService: CopysService){}

  ngOnInit(): void {

    this.title = this.copysService.title;
    this.subtitle = this.copysService.subtitle;
  }


}
