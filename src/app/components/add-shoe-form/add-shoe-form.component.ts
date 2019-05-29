import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AddShoeContainerComponent } from '../../containers/add-shoe-container/add-shoe-container.component';

import { ShoeService } from '../../shoes-service/shoe.service';

import { Shoe } from '../../models/shoes.interface';

@Component({
  selector: 'app-add-shoe-form',
  templateUrl: './add-shoe-form.component.html',
  styleUrls: ['./add-shoe-form.component.scss']
})
export class AddShoeFormComponent implements OnInit {
  @Input()
  detail: Shoe;

  // name = new FormControl('', [Validators.required, Validators.email]);

  addShoesForm = new FormGroup({
    brand: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    photo: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required])
  });

  // getErrorMessage() {
  //   return this.addShoesForm.value.name.hasError('required') ? 'You must enter a value' : '';
  // }

  constructor(public dialogRef: MatDialogRef<AddShoeContainerComponent>, private shoeService: ShoeService) {}
  
  ngOnInit() {
    // this.
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit(shoe: Shoe, isValid: boolean) {
    
    // if(isValid) {
    //   this.shoeService.createShoes();
    // }

  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.shoeService.createShoes(this.addShoesForm.value);
    this.dialogRef.close();
  }

}
