import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../../shoes-service/shoe.service';
import { Observable } from 'rxjs';
import { Shoe } from '../../../app/models/shoes.interface';

@Component({
  selector: 'app-shoes-cards-container',
  templateUrl: './shoes-cards-container.component.html',
  styleUrls: ['./shoes-cards-container.component.scss']
})
export class ShoesCardsContainerComponent implements OnInit {

  shoes: Observable<Shoe[]>;
  shoeService;

  constructor(shoeService: ShoeService) { 
    this.shoeService = shoeService;
    this.shoes = shoeService.getShoes();
  }

  ngOnInit() {
  }

}
