/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingMinutes){
  switch(remainingMinutes) {
    case undefined:
      return 'You forgot to set the timer.';
    case 0:
      return 'Lasagna is done.';
    default:
      return 'Not done, please wait.';
  }
}


export function preparationTime(layers, averagePreparationTime = 2){
  return layers.length * averagePreparationTime;
}

export function quantities(layers){
  const supplies = {
    noodles: 0,
    sauce: 0,
  }
  
  // sauce - 0.2 liters
  // noodles - 50 grams,

  for(let layer of layers){
    if(layer === 'noodles'){
      supplies[layer] += 50;
    } else if (layer === 'sauce'){
      supplies[layer] += 0.2;
    }
  }

  return supplies;
}

export function addSecretIngredient(friendIngredients, myIngredients){
  const lastElement = friendIngredients.at(friendIngredients.length - 1);
  myIngredients.push(lastElement);
}

export function scaleRecipe(recipe, numberOfPortions) {
  const newRecipe = {}

  for(let ingredient in recipe){
    newRecipe[ingredient] = recipe[ingredient] * (numberOfPortions / 2);
  }
  return newRecipe;
}
