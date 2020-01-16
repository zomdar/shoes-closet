import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { ShoeService } from '../../../shoes-service/shoe.service';

import { NewReleaseSites } from "../../../models/new-release.interface";

@Component({
  selector: "app-add-links-container",
  templateUrl: "./add-links-container.component.html",
  styleUrls: ["./add-links-container.component.scss"]
})
export class AddLinksContainerComponent implements OnInit {
  links;
  shoeId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<AddLinksContainerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private shoeService: ShoeService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.shoeId = params['shoeId'];
    });
  }

  onUpdateLink(event: NewReleaseSites) {
    // if (this.data.isEdit) {
    //   this.shoeService.updateShoesNewsLinks(event, this.shoeId);
    // } else {
      this.shoeService.updateShoesNewsLinks(event,  this.shoeId);
    }
  // }
}
