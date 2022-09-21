const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const students = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));

  const Studentsincs = students

    .filter((student) => student.field === 'CS')
    .map((student) => student.firstName);

  const Studentsinsw = students

    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);

  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${Studentsincs.length}. List: ${Studentsincs.join(', ')}`);
  console.log(`Number of students in SWE: ${Studentsinsw.length}. List: ${Studentsinsw.join(', ')}`);
}

module.exports = countStudents;
