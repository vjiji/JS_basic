//object : 여러 속성을 가지고 다른 것과 식별가능한 모든 것
//class : 객체의 속성을 정의해 놓은 객체의 템플릿(설계도)
// class 클래스명 {
//     constructor(매개변수) {
//         this.변수 = 매개변수  : this는 클래스를 통해 생성될 객체 자신을 의미, this로 객체가 가진 속성을 할당
//     }
// }

class Notebook {
  constructor(name, price, company) {
    this.name = name;
    this.price = price;
    this.company = company;
  }
}

const notebook1 = new Notebook("mac", 10000, "apple");

console.log(notebook1);
console.log(Notebook);
console.log(notebook1.company);

//method : 클래스안에 정의, 클래스를 통해 생성한 객체가 호출 가능
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  printInfo() {
    console.log(`상품: ${this.name}, 가격: ${this.price}`);
  }
}
const car = new Product("car1", 20000);
console.log(car.name);
car.printInfo();

//객체 리터럴: class 없이 객체를 바로 만들어 사용할 수도 있다. (재사용이 필요할 때는 class를 사용)
const computer = {
  name: "mac1",
  price: 10000,
  printInto: function () {
    console.log(`상품: ${this.name}, 가격: ${this.price}`);
  },
};
console.log(computer.name);
computer.printInto();

class Cloth {
  constructor(color, size, price) {
    this.color = color;
    this.size = size;
    this.price = price;
  }

  printInfo() {
    console.log(
      `색깔: ${this.color}, 사이즈: ${this.size}, 가격: ${this.price}`
    );
  }
}

const shirts = new Cloth("white", "M", "50000");
const coat = new Cloth("navy", "L", "200000");
shirts.printInfo();
coat.printInfo();
