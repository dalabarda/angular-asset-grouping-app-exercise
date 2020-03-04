import { Injectable } from '@angular/core';


// TODO: Unused service. 


// TODO: remmove tis later, this service is not in use
class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
}

@Injectable()
export class AssetService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  constructor(private counterService: CounterService) {}

  setToActive(id: number) { 
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInActiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }


// ///////////////////////////

  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomates',10),
  ];

  getIngredients() {
    // REMEMBER slice method doesn't access the original array in the service
    return this.ingredients.slice();
  }
}


// ingredient.model.ts
export class Ingredient {
  constructor(public name: string, public amount: number) {}
}



