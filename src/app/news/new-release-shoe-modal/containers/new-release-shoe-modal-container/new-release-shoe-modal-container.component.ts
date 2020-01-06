import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ShoeService } from '../../../../shoes-service/shoe.service';

import { NewRelease } from '../../../../models/new-release.interface';

@Component({
  selector: 'app-new-release-shoe-modal-container',
  templateUrl: './new-release-shoe-modal-container.component.html',
  styleUrls: ['./new-release-shoe-modal-container.component.scss']
})
export class NewReleaseShoeModalContainerComponent implements OnInit {
  shoes: NewRelease;

  constructor(public dialogRef: MatDialogRef<NewReleaseShoeModalContainerComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              private shoeService: ShoeService) {}
  
  ngOnInit() {
    // getting the first shoe in the collection
    if(this.data.isEdit) {
      this.shoeService.getShoesNews()
                      .subscribe((snapshot) => {
                        snapshot.forEach(doc => {
                          if(doc.id === this.data.id) {
                            this.shoes = doc;
                            return doc;
                          }
                        });
                      })
    }
  }

  onUpdateShoe(event: NewRelease) {
    if(this.data.isEdit) {
      this.shoeService.updateShoeNews(event, this.data.id);
    } else {
      this.shoeService.createShoesNews(event);
    }
  }

}
