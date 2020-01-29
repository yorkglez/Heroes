"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class HeroesController {
    index(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            const heroes = yield database_1.default.query('SELECT * FROM heroes');
            resp.json(heroes);
        });
    }
    showOne(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('HERE');
            let { id } = req.params;
            let heroe = yield database_1.default.query('SELECT * FROM heroes WHERE idHeroe = ?', [id]);
            if (heroe.length > 0) {
                return resp.status(200).json(heroe);
            }
            resp.status(404).json({ message: 'The heroe does not exists' });
        });
    }
    create(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO heroes set ?', [req.body]);
            resp.json({ text: 'Heroe saved' });
        });
    }
    update(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            yield database_1.default.query('UPDATE heroes set ? WHERE idHeroe = ?', [req.body, id]);
            resp.status(200).json({ message: 'The heroe was updated' });
        });
    }
    delete(req, resp) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.params;
            let heroe = yield database_1.default.query('SELECT * FROM heroes WHERE idHeroe = ?', [id]);
            if (heroe.length > 0) {
                // await pool.query('DELETE FROM heroes WHERE idHeroe = ?',[id]);
                resp.status(200).json({ message: 'The heroe was deleted' });
            }
            else {
                resp.status(404).json({ message: 'The heroe does not exists' });
            }
        });
    }
}
exports.heroesController = new HeroesController();
