const students = [
  { name: "Aman", marks: 80 },
  { name: "Riya", marks: 45 },
  { name: "John", marks: 60 }
];

const resultData = students.map(student => {
  return {
    Name: student.name,
    Marks: student.marks,
    Result: student.marks >= 50 ? "Pass" : "Fail"
  };
});

console.table(resultData);