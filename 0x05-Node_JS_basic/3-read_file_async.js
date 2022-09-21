const fs = require('fs');

async function countStudents(path) {
  let inf;

  try {
    inf = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const students = inf.split('\n')

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

  const Stundentsinswe = students
    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  console.log(`Number of students: ${students.length}`);
  console.log(`Number of students in CS: ${Studentsincs.length}. List: ${Studentsincs.join(', ')}`);
  console.log(`Number of students in SWE: ${Stundentsinswe.length}. List: ${Stundentsinswe.join(', ')}`);
  return { students, Studentsincs, Stundentsinswe };
}

module.exports = countStudents;
