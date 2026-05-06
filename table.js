const express = require("express");
const app = express();

app.set("view engine", "ejs");

const students = [
  { name: "Aman", marks: 80 },
  { name: "Riya", marks: 45 },
  { name: "John", marks: 60 }
];

app.get("/", (req, res) => {

  
  const resultData = students.map(s => ({
    name: s.name,
    marks: s.marks,
    result: s.marks >= 50 ? "Pass" : "Fail"
  }));

  // 👉 EJS ko data bhejna
  res.render("index", { students: resultData });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});