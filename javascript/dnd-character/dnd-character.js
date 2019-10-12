export const abilityModifier = constitution => {
  if (constitution < 3) {
    throw new Error("Ability scores must be at least 3");
  }

  if (constitution > 18) {
    throw new Error("Ability scores can be at most 18");
  }

  const abilityScore = Math.floor((constitution - 10) / 2);

  return abilityScore;
};

export class Character {
  static rollAbility() {
    const MAX = 6;
    const rolls = Array.from({ length: 4 }).map(
      () => Math.floor(Math.random() * MAX) + 1
    );
    const lowestRoll = Math.min(...rolls);
    return rolls
      .filter(number => number !== lowestRoll)
      .reduce((acc, cur) => acc + cur, 0);
  }

  constructor() {
    this.strength = Character.rollAbility();
    this.dexterity = Character.rollAbility();
    this.constitution = Character.rollAbility();
    this.intelligence = Character.rollAbility();
    this.wisdom = Character.rollAbility();
    this.charisma = Character.rollAbility();
    this.hitpoints = 10 + abilityModifier(this.constitution);
  }
}
