const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1"; //$1 is a parameter not a constant

module.exports = {
  getStudents,
  getStudentsById,
};
