export default function getListStudentIds(DataStudents) {
  if (Array.isArray(DataStudents)) {
    return DataStudents.map((students) => students.id);
  }
  return [];
}
