"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStudentsFiltered = exports.findemailGmail = exports.findsecondSurname = exports.findOneStudent = exports.findAllStudents = exports.createStudent = void 0;
const config_js_1 = require("../../config.js");
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.createStudent = createStudent;
;
function findAllStudents(callback) {
    const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findAllStudents = findAllStudents;
function findOneStudent(id, callback) {
    const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findOneStudent = findOneStudent;
function findStudentsFiltered(callback) {
    const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code " +
        "FROM student " +
        "WHERE second_surname is not null and email_personal like '%@gmail.com'";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findStudentsFiltered = findStudentsFiltered;
function findsecondSurname(second_surname, callback) {
    const queryString = "SELECT name, second_surname FROM student WHERE second_surname = ?";
    config_js_1.db.query(queryString, [second_surname], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findsecondSurname = findsecondSurname;
function findemailGmail(email_gmail, callback) {
    const queryString = "SELECT name, email_gmail FROM student WHERE email_gmail= ?";
    config_js_1.db.query(queryString, [email_gmail], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findemailGmail = findemailGmail;
