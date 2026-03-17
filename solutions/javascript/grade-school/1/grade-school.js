//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor(){
    this.school = [];
  }
  
  roster() {
    return this.school.flat();
  }

  add(studentName, gradeNumber) {
    const gradeIndex = gradeNumber - 1;
    let currentGrade = this.school[gradeIndex] ? this.school[gradeIndex] : [];
    
    if(this.school.flat().includes(studentName)) return false;
    
    currentGrade.push(studentName);
    currentGrade.sort();
    this.school[gradeIndex] = currentGrade;
    return true;
  }

  grade(gradeNumber) {
    const requestedGrade = this.school[gradeNumber - 1];
    return requestedGrade ? requestedGrade.sort() : [];
  }
}
