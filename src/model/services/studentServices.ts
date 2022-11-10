import { Student } from "../types/student.js";
import { db } from "../../config.js";
import { OkPacket, RowDataPacket } from "mysql2";

function createStudent(student: Student, callback: Function) {
  const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)"

  db.query(
    queryString,
    [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode],
    (err, result) => {
      if (err) { callback(err, null) };

      const insertId = (<OkPacket>result).insertId;
      callback(null, insertId);
    }
  );
};

function findAllStudents(callback: Function) {
  const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
  db.query(queryString, (err, result) => {
    if (err) callback(err, null);

    const students = result;
    callback(null, students);
  })
}

function findOneStudent(id: string, callback: Function) {

  const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result) => {
    if (err) { callback(err, null) };

    const studentFound: Student = (<RowDataPacket>result)[0];

    callback(null, studentFound);
  })
}
function findStudentsFiltered(callback: Function) {
  const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code " + 
    "FROM student " +
    "WHERE second_surname is not null and email_personal like '%@gmail.com'";
    
  db.query(queryString, (err, result) => {
    if (err) callback(err, null);

    const students = result;
    callback(null, students);
  })
}

export { createStudent, findAllStudents, findOneStudent, findStudentsFiltered };