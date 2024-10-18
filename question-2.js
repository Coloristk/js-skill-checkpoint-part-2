const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
function result(data) {
  const updateScore = data
    .filter((student) => student.score > 50)
    .map((student) => student.score * 1.1)
    .reduce((acc, cur) => acc + cur, 0);
  return updateScore;
}
const totalScore = result(students);
console.log(`Total score is ${totalScore}`);
