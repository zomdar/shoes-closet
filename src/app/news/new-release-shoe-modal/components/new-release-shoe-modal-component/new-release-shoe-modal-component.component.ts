import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { NewReleaseShoeModalContainerComponent } from '../../containers/new-release-shoe-modal-container/new-release-shoe-modal-container.component';

import { NewRelease } from '../../../../models/new-release.interface';

import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-release-shoe-modal-component',
  templateUrl: './new-release-shoe-modal-component.component.html',
  styleUrls: ['./new-release-shoe-modal-component.component.scss']
})
export class NewReleaseShoeModalComponent implements OnInit {
  @Input()
  shoesModel: NewRelease;

  @Output()
  update: EventEmitter<NewRelease> = new EventEmitter<NewRelease>();

  newReleaseShoeForm = new FormGroup({
    releaseDate: new FormControl(''),
    shoeDetails: new FormGroup({
      brand: new FormControl(''),
      name: new FormControl(''),
      subName: new FormControl(''),
      price: new FormControl(''),
      photoLink:new FormControl('')
    }),
  })
  
  updateFormValues() {
    if(this.shoesModel) {
      this.newReleaseShoeForm.setValue({
        releaseDate: this.shoesModel.releaseDate.toDate(),
        shoeDetails: {
          brand: this.shoesModel.shoeDetails.brand,
          name: this.shoesModel.shoeDetails.name,
          subName: this.shoesModel.shoeDetails.subName,
          price: this.shoesModel.shoeDetails.price,
          photoLink: this.shoesModel.shoeDetails.photoLink
        }
      })
    }
  }

  constructor(public dialogRef: MatDialogRef<NewReleaseShoeModalContainerComponent>) {}
  
  ngOnInit() {
  }

  ngOnChanges() {
    this.updateFormValues();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit(shoe: NewRelease, isValid: boolean) {
    if(isValid) {
      this.update.emit(shoe);
      this.dialogRef.close();
    }
  }

}
