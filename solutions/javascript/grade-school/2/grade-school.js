//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    // Object to store grades as keys
    this.school = {};
  }

  roster() {
    return [...Object.values(this.school).flat()];
  }

  add(studentName, gradeNumber) {
    // Check if student already exists in all grades
    const allStudents = Object.values(this.school).flat();
    if (allStudents.includes(studentName)) return false;

    // Create a grade, if not present
    if (!Object.hasOwn(this.school, gradeNumber)) {
      this.school[gradeNumber] = [];
    }

    this.school[gradeNumber].push(studentName);
    this.school[gradeNumber].sort();
    return true;
  }

  grade(gradeNumber) {
    return this.school[gradeNumber] ? [...this.school[gradeNumber]] : [];
  }
}
