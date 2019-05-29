import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

import { ShoeService } from '../../shoes-service/shoe.service';

import { Shoe } from '../../models/shoes.interface';

@Component({
  selector: 'app-add-shoe-container',
  templateUrl: './add-shoe-container.component.html',
  styleUrls: ['./add-shoe-container.component.scss']
})
export class AddShoeContainerComponent implements OnInit {
  shoes: Shoe;

  constructor(public dialogRef: MatDialogRef<AddShoeContainerComponent>, private shoeService: ShoeService) {}
  
  ngOnInit() {
    // getting the first shoe in the collection
    this.shoeService.getShoes()
                    .subscribe((data: Shoe) => this.shoes = data[0]);
  }

}
