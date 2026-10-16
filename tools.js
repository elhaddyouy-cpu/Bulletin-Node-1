function notes(student, matiere) {
  console.log(matiere.toUpperCase());
  console.log(student.notes[matiere].join("\n"));
}
module.exports = { notes };
