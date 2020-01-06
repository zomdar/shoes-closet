import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { NewReleaseShoeModalContainerComponent } from '../../containers/new-release-shoe-modal-container/new-release-shoe-modal-container.component';

import { NewRelease } from '../../../../models/new-release.interface';

@Component({
  selector: 'app-new-release-shoe-modal-component',
  templateUrl: './new-release-shoe-modal-component.component.html',
  styleUrls: ['./new-release-shoe-modal-component.component.scss']
})
export class NewReleaseShoeModalComponent implements OnInit {
  @Input()
  detail: NewRelease;

  @Output()
  update: EventEmitter<NewRelease> = new EventEmitter<NewRelease>();

  constructor(public dialogRef: MatDialogRef<NewReleaseShoeModalContainerComponent>) {}
  
  ngOnInit() {
  }

  ngOnChanges() {
    // todo....date not working
    // this.date = this.detail.releaseDate.toDate();
    // this.detail.releaseDate = this.date;
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
