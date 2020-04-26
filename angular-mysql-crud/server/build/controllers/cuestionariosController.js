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
class CuestionariosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const cuestionarios = yield database_1.default.query('SELECT * FROM cuestionario');
            res.json(cuestionarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const cuestionario = yield database_1.default.query('SELECT * FROM cuestionario WHERE id = ?', { id });
            console.log(cuestionario);
            if (cuestionario.length > 0) {
                return res.json(cuestionario[0]);
            }
            res.status(404).json({ 'text': 'the cuestionario doesnt exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO cuestionario set ?', [req.body]);
            res.json({ 'message': 'saved questionaire' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM cuestionario WHERE id = ?', [{ id }]);
            res.json({ 'message': 'the cuetsionrio was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE cuestionario set ? WHERE id = ?', [req.body, id]);
            res.json({ 'message': 'the questionaire was updated ' });
        });
    }
}
const cuesionariosController = new CuestionariosController();
exports.default = cuesionariosController;
