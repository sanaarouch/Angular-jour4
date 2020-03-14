import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  
  getData()
  {
    return [
      {
        titre : "Création n°1",
        url : "https://via.placeholder.com/400x300?text=creation 1"
      },
      {
        titre : "Création n°2",
        url : "https://via.placeholder.com/400x300?text=creation 2"
      },
      {
        titre : "Création n°3",
        url : "https://via.placeholder.com/400x300?text=creation 3"
      },
      {
        titre : "Création n°4",
        url : "https://via.placeholder.com/400x300?text=creation 4"
      }
    ];
  }


  constructor() { }
}