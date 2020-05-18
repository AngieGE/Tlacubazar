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
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class CategoryEnumController {
    static listCategoryEnum(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCategoryEnum, category } = req.query; //req.body req.query req.params
            const _CategorysEnum = yield services_1.CategoryEnumService.listCategoryEnum(idCategoryEnum, category);
            res.json({ length: _CategorysEnum.length, recordset: _CategorysEnum });
        });
    }
}
exports.CategoryEnumController = CategoryEnumController;
