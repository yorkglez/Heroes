"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, resp) {
        resp.send('Hello');
    }
}
exports.indexController = new IndexController();
