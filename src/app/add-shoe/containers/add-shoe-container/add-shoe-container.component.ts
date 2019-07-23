import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ShoeService } from '../../../shoes-service/shoe.service';

import { Shoe } from '../../../models/shoes.interface';

@Component({
  selector: 'app-add-shoe-container',
  templateUrl: './add-shoe-container.component.html',
  styleUrls: ['./add-shoe-container.component.scss']
})
export class AddShoeContainerComponent implements OnInit {
  shoes: Shoe;

  constructor(public dialogRef: MatDialogRef<AddShoeContainerComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              private shoeService: ShoeService) {}
  
  ngOnInit() {
    // getting the first shoe in the collection
    if(this.data.isEdit) {
      this.shoeService.getShoes()
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

  onUpdateShoe(event: Shoe) {
    if(this.data.isEdit) {
      this.shoeService.updateShoe(event, this.data.id);
    } else {
      this.shoeService.createShoes(event);
    }
  }

}
