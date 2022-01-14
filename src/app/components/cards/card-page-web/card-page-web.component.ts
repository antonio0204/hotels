import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CopysService } from '../../../shared/updateData/copys.service';

@Component({
  selector: 'app-card-page-web',
  templateUrl: './card-page-web.component.html'
})
export class CardPageWebComponent implements OnInit {

  title = '';
  subtitle = '';

  items;
  checkoutForm;



  constructor(public copysService: CopysService, readonly formBuilder: FormBuilder) {

    this.checkoutForm = this.formBuilder.group({
      title: ''
    });
  }

  ngOnInit(): void {
    this.title = this.copysService.title;
  }

  getTitle(){
    //TODO
  }



}
