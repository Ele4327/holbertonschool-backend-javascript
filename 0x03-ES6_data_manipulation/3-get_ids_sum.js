export default function getStudentIdsSum(stdnts) {
  return stdnts.map((data) => data.id).reduce(
    (othervalue, value) => othervalue + value,
  );
}
