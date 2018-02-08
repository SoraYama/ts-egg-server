import * as egg from 'egg';
const Controller = egg.Controller;

export default class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello worldssdd';
  }
}

declare module 'egg' {
  export interface IController {
    home: HomeController;
  }
}
