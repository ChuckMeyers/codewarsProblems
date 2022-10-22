// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Solution

function declareWinner(fighter1, fighter2, firstAttacker) {
    const fight1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    const fight2 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    
    if(fight1 > fight2) {
      return fighter1.name;
    } else if(fight1<fight2) {
      return fighter2.name;
    } else {
      return firstAttacker
    }
  }