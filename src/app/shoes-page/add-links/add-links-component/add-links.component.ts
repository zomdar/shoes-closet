import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { MatDialogRef } from "@angular/material";
import { FormGroup, FormControl, FormArray } from "@angular/forms";

import { ShoeService } from "../../../shoes-service/shoe.service";

import { AddLinksContainerComponent } from "../add-links-container/add-links-container.component";

import { NewReleaseSites } from "../../../models/new-release.interface";

@Component({
  selector: "app-add-links",
  templateUrl: "./add-links.component.html",
  styleUrls: ["./add-links.component.scss"]
})
export class AddLinksComponent implements OnInit {
  @Input()
  linksModel: NewReleaseSites;

  @Output()
  update: EventEmitter<NewReleaseSites> = new EventEmitter<NewReleaseSites>();

  addLinkform = new FormGroup({
    name: new FormControl(""),
    siteLink: new FormControl(""),
    releaseDate: new FormControl("")
  });

  updateFormValues() {
    // if(this.linksModel) {
    //   this.addLinkform.setValue({
    //     name: this.linksModel.shoeDetails.name,
    //     siteLink: this.linksModel.shoeDetails.siteLink,
    //     releaseDate: this.linksModel.releaseDate.toDate()
    //   })
    // }
  }

  constructor(
    public dialogRef: MatDialogRef<AddLinksContainerComponent>
  ) {}

  ngOnInit() {
  }

  ngOnChanges() {
    this.updateFormValues();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit(links: NewReleaseSites, isValid: boolean) {
    if (isValid) {
      this.update.emit(links);
      this.dialogRef.close();
    }
  }
}
