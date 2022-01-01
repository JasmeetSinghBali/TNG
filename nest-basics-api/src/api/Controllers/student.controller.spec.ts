import { StudentController } from './student.controller';
// import { StudentService } from '../Services/student.service'

describe('Student Controller', () => {
  let studentsController: StudentController;

  beforeEach(() => {
    studentsController = new StudentController();
    // studentsService = new StudentService()
    // studentsController = new StudentController(studentsService)
  });

  describe('getStudents', () => {
    it('should return all students', async () => {
      expect(await studentsController.getStudents()).toBe('All Students');
      // const result = ['test']
      // jest.spyOn(studentService,'getAll').mockImplementation(()=>result)
      // expect(await studentsController.getStudents()).toBe(result)
    });
  });
  describe('getStudentById', () => {
    it('should return single students', async () => {
      expect(await studentsController.getStudentById()).toBe(
        'Get Student By Id',
      );
      // const result = {'test':{}}
      // // jest.spyOn(studentService,'getOne').mockImplementation(()=>result)
      // expect(await studentsController.getStudents()).toBe(result)
    });
  });
  describe('createStudent', () => {
    it('should create student', async () => {
      expect(await studentsController.createStudent()).toBe(
        'Create\'s New Student',
      );
      // const result = {'test':{}}
      // // jest.spyOn(studentService,'getOne').mockImplementation(()=>result)
      // expect(await studentsController.getStudents()).toBe(result)
    });
  });
  describe('updateStudent', () => {
    it('should update student', async () => {
      expect(await studentsController.updateStudentById()).toBe(
        'Update\'s New Student',
      );
      // const result = {'test':{}}
      // // jest.spyOn(studentService,'getOne').mockImplementation(()=>result)
      // expect(await studentsController.getStudents()).toBe(result)
    });
  });
});
