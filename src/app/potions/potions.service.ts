import { Injectable } from '@angular/core';
import { Potion } from './potion';

@Injectable()
export class PotionsService {

  constructor() { }

  getPotions() {
    return POTIONS;
  }


}

const POTIONS = [
  {
    name: 'Death nectar',
    difficulty: 'high',
    purpose: 'To kill an enemy',
    time: 2,
    imgUrl: 'https://www.shareicon.net/data/128x128/2016/10/18/845354_medical_512x512.png',
  },
  {
    name: 'Liquid luck',
    difficulty: 'moderate',
    purpose: 'To gain limitless luck',
    time: 4,
    imgUrl: 'https://www.shareicon.net/data/128x128/2016/11/15/853782_wine_512x512.png',
  },
  {
    name: 'Love potion',
    difficulty: 'low',
    purpose: '',
    time: 7,
    imgUrl: 'https://www.shareicon.net/data/128x128/2016/11/15/853903_halloween_512x512.png',
  }
];
