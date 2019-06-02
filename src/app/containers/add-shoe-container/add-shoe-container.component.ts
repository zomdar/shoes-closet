import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

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
    // this.shoeService.getShoes()
    //                 .subscribe((data: Shoe) => this.shoes = data[0]);
  }

  onUpdateShoe(event: Shoe) {
    // this.shoeService.createShoes(event);
    console.log(event);
  }

}
