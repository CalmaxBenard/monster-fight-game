const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currrentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const monsterDamage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= monsterDamage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currrentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0) {
    alert("You won!");
  } else if (currrentPlayerHealth <= 0) {
    alert("You lost!");
  }
}

attackBtn.addEventListener("click", attackHandler);
