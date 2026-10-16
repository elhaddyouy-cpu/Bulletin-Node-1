const notes = require("./tools");
const student = require("./student.json");

/*const student = {
  prenom: "William",
  nomDeFamille: "Dupont",
  dateDeNaissance: "1986-04-22",
  isGarcon: true,
  notes: {
    histoire: [2, 4, 3, 7, 9, 5],
    mathematiques: [12, 11, 13, 15],
    anglais: [15, 14, 18, 19, 10],
    francais: [8, 11, 12, 10, 0, 12, 12.5],
    arts: [17, 16],
    musique: [15, 16, 14, 18, 17],
    physique: [18, 16, 15, 16],
    sport: [13],
  },
};*/
console.log(student.prenom, student.nomDeFamille.toUpperCase());
console.log(student.dateDeNaissance);

/*function notes(student, matiere) {
  console.log(matiere.toUpperCase());
  console.log(student.notes[matiere].join("\n"));
}*/

/*notes(student, "histoire");
notes(student, "mathematiques");
notes(student, "anglais");
notes(student, "francais");
notes(student, "arts");
notes(student, "musique");
notes(student, "physique");
notes(student, "sport");
*/

/*for (const matiere of Object.keys(student.notes)) {
  notes(student, matiere);
}*/
for (const matiere of Object.keys(student.notes)) {
  notes.notes(student, matiere);
}
