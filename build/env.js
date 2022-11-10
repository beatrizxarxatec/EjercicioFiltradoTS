"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.PORT = void 0;
const mysql = require('mysql2/promise');
const PORT = 3000;
exports.PORT = PORT;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'xa_char_sheet'
});
exports.connection = connection;
