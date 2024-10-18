const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

const allPeople = [];

// เริ่มเขียนโค้ดตรงนี้
const techupMember = [...techupPeople, ...techcoolPeople].filter(
  (member) => member.age < 20
);
allPeople.push(...techupMember);
console.log(allPeople);
