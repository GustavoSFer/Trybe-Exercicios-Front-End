import Person from './Person';

class Students extends Person {
  private enrollment:  number;
  private examsGrades: number[];
  private worksGrades: number[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.enrollment = enrollment;
  }
}