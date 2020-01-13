import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ShoeService } from '../../../shoes-service/shoe.service';

import { NewReleaseSites } from "../../../models/new-release.interface";

@Component({
  selector: "app-add-links-container",
  templateUrl: "./add-links-container.component.html",
  styleUrls: ["./add-links-container.component.scss"]
})
export class AddLinksContainerComponent implements OnInit {
  links;

  constructor(
    public dialogRef: MatDialogRef<AddLinksContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shoeService: ShoeService
  ) {}

  ngOnInit() {}

  onUpdateLink(event: NewReleaseSites) {
    console.log(event);
    // if (this.data.isEdit) {
    //   this.shoeService.updateShoeNews(event, this.data.id);
    // } else {
    //   this.shoeService.createShoesNews(event);
    // }
  }
}
