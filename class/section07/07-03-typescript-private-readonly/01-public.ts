// public, private, protected, readonly

class Monster2 {
  // power = 10; // public, private, protected, readonly  중 1개라도 있으면 생략가능
  constructor(public power: any) {
    // this.power = power;
  }
  attack1 = () => {
    console.log("공격하자");
    console.log("내 공격력은 " + this.power + "야!!!");
    this.power = 30;
  };
}

class 공중몬스터2 extends Monster2 {
  attack2 = () => {
    console.log("공격하자");
    console.log("내 공격력은 " + this.power + "야!!!");
  };
}

const myMonster22 = new 공중몬스터2(20);
myMonster22.attack1();
myMonster22.attack2();
console.log(myMonster22.power);
myMonster22.power = 10;
