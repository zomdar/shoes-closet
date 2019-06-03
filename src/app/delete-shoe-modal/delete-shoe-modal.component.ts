import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {ShoeService} from '../shoes-service/shoe.service';

@Component({
  selector: 'app-delete-shoe-modal',
  templateUrl: './delete-shoe-modal.component.html',
  styleUrls: ['./delete-shoe-modal.component.scss']
})
export class DeleteShoeModalComponent implements OnInit {

  shoeService;

  constructor(public dialogRef: MatDialogRef<DeleteShoeModalComponent>,
              shoeService: ShoeService,
              @Inject(MAT_DIALOG_DATA) public data: any) { 
                this.shoeService = shoeService;
              }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleDelete(id: string): void {
    this.shoeService.deleteShoe(id);
    this.dialogRef.close();
  }

}
