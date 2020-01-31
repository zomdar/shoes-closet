import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    comment: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  handleSubmit(formValue, isFormValid) {
    if(isFormValid) {
      console.log(formValue);
    }
  }

}
