"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HeroesController {
    index(req, resp) {
        resp.send('Hello');
    }
}
exports.heroesController = new HeroesController();
