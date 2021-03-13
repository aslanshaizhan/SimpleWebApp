export class User {
  id: number;
  name: string;
  age: number;
  weight: number;

  constructor(id: number,
              name: string,
              age: number,
              weight: number) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
}
