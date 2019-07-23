import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { AddShoeContainerComponent } from '../../containers/add-shoe-container/add-shoe-container.component';

import { ShoeService } from '../../../shoes-service/shoe.service';

import { Shoe } from '../../../models/shoes.interface';

@Component({
  selector: 'app-add-shoe-form',
  templateUrl: './add-shoe-form.component.html',
  styleUrls: ['./add-shoe-form.component.scss']
})
export class AddShoeFormComponent implements OnInit {
  @Input()
  detail: Shoe;

  @Output()
  update: EventEmitter<Shoe> = new EventEmitter<Shoe>();

  constructor(public dialogRef: MatDialogRef<AddShoeContainerComponent>, private shoeService: ShoeService) {}
  
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit(shoe: Shoe, isValid: boolean) {
    if(isValid) {
      this.update.emit(shoe);
      this.dialogRef.close();
    }
    
  }

}
