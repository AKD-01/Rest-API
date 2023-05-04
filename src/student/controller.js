const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  //check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }
    //add student to db
    else {
      pool.query(
        queries.addStudent,
        [name, email, age, dob],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Student Created Successfully!");
        }
      );
    }
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentsById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student doesn't exist in the database");
    } else {
      pool.query(queries.removeStudent, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student Deleted Successfully!");
      });
    }
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(queries.getStudentsById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student doesn't exist in the database");
    } else {
      pool.query(queries.updateStudent, [name, id], (error, results) => {
        if (error) throw error;
        res.status(200).send("Student Updated Successfully!");
      });
    }
  });
};

module.exports = {
  getStudents,
  getStudentsById,
  addStudent,
  removeStudent,
  updateStudent,
};
