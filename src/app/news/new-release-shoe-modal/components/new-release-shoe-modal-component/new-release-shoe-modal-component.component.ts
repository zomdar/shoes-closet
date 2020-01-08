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
    releaseDate: new FormControl(),
    releaseSites: new FormArray([]),
    shoeDetails: new FormGroup({
      brand: new FormControl(''),
      name: new FormControl(''),
      subName: new FormControl(''),
      price: new FormControl(''),
      photoLink:new FormControl('')
    }),
  })

  constructor(public dialogRef: MatDialogRef<NewReleaseShoeModalContainerComponent>) {}
  
  ngOnInit() {
  }

  ngOnChanges() {
    // todo....date not working
    // this.date = this.shoesModel.releaseDate.toDate();
    // this.shoesModel.releaseDate = this.date;
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
