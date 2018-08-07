import { Component, OnInit } from '@angular/core';
import { PotionsService } from './potions.service';
import { Potion } from './potion';

@Component({
  selector: 'app-potions',
  templateUrl: './potions.component.html',
  styleUrls: ['./potions.component.css']
})
export class PotionsComponent implements OnInit {

  potions: Potion[];
  selectedPotion: Potion;

  constructor(private potionsService: PotionsService) { }

  onSelect(potion: Potion) {
    this.selectedPotion = potion;
  }

  ngOnInit() {
    this.potions = this.potionsService.getPotions();
  }

}
