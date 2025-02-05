class Monster {
  power = 10;
  constructor(qqq) {
    this.power = qqq;
  }
  attack = () => {
    console.log("공격하자");
    console.log("내 공격력은 " + this.power + "야!!!");
  };
  run = () => {
    console.log("도망가자");
  };
}

class 공중몬스터 extends Monster {
  constructor(aaa) {
    super(aaa + 1);
  }

  run = () => {
    console.log("날라서 도망가자!!");
  };
}

class 지상몬스터 extends Monster {
  constructor(bbb) {
    super(bbb);
  }
  run = () => {
    console.log("뛰어서 도망가자!!");
  };
}

const myMonster1 = new 공중몬스터(20);
myMonster1.attack();
myMonster1.run();
const myMonster2 = new 지상몬스터(50);
myMonster2.attack();
myMonster2.run();
