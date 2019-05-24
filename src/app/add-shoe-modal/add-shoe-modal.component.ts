import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ShoeService } from '../shoes-service/shoe.service';

import { Shoe } from '../models/shoes.interface';

@Component({
  selector: 'app-add-shoe-modal',
  templateUrl: './add-shoe-modal.component.html',
  styleUrls: ['./add-shoe-modal.component.scss']
})
export class AddShoeModalComponent implements OnInit {

  @Input()
  shoeDetail: Shoe;

  @Output()
  update: EventEmitter<Shoe> = new EventEmitter<Shoe>();

  name = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }

  constructor(public dialogRef: MatDialogRef<AddShoeModalComponent>, private shoeService: ShoeService) {}
  
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit(shoe: Shoe, isValid: boolean) {
    
    // if(isValid) {
      // this.shoeService.createShoes();
    // }
  }


}
