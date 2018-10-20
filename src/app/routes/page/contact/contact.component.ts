import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from '@app/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private orderForm: FormGroup;

  constructor(private fbs: FormBuilderService) { 
    this.orderForm = this.fbs.buildOrderForm();
  }

  ngOnInit() {
  }

  public submitForm($event: any, value: any): void {
    $event.preventDefault();
  }

}
