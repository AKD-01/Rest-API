const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1"; //$1 is a parameter not a constant
const checkEmailExists = "SELECT * FROM students WHERE email = $1";
const addStudent = "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudent = "DELETE FROM students WHERE id = $1";

module.exports = {
  getStudents,
  getStudentsById,
  checkEmailExists,
  addStudent,
  removeStudent,
};
