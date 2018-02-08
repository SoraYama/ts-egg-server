"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg = require("egg");
const Controller = egg.Controller;
class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello worldssdd';
    }
}
exports.default = HomeController;
//# sourceMappingURL=home.js.map