import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return cats;
  }
  createCat(req): any {
    const cat = new Cat(req.body.name, req.body.age);
    cats.push(cat);
    return cat;
  }
}

const cats = [];
class Cat {
  constructor(
    private name,
    private age,
  ) {}
}
