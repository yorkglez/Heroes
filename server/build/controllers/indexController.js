"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, resp) {
        resp.send('Hello index');
    }
}
exports.indexController = new IndexController();
