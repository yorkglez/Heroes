"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const heroesController_1 = require("../controllers/heroesController");
class HeroesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', heroesController_1.heroesController.index);
        this.router.get('/:id', heroesController_1.heroesController.showOne);
        this.router.post('/', heroesController_1.heroesController.create);
        this.router.put('/:id', heroesController_1.heroesController.update);
        this.router.delete('/:id', heroesController_1.heroesController.delete);
    }
}
const heroesRoutes = new HeroesRoutes();
exports.default = heroesRoutes.router;
