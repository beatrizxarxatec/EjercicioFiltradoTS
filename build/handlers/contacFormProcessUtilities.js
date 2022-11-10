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
exports.contactFormProcessUtilities = void 0;
const env_js_1 = require("../env.js");
class contactFormProcessUtilities {
    static sendResponseToBrowserAfterSubmit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield env_js_1.connection.connect();
            let data = 0;
            yield env_js_1.connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
                if (err)
                    throw err;
                data = rows[0].solution;
                console.log(data);
            });
            yield env_js_1.connection.end();
            res.send(`<p>${data}</p>`);
        });
    }
}
exports.contactFormProcessUtilities = contactFormProcessUtilities;
