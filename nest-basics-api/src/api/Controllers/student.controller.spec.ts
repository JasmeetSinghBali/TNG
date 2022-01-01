import { StudentController } from './student.controller';
// import { StudentService } from '../Services/student.service';

describe('Student Controller',()=>{
    let studentsController: StudentController;

    beforeEach(()=>{
        // studentsService = new StudentService();
        // studentsController = new StudentController(studentsService);
    })

    describe('getStudents',()=>{
        it('should return all students',async()=>{
            const result = ['test'];
            // jest.spyOn(studentService,'getAll').mockImplementation(()=>result)
            expect(await studentsController.getStudents()).toBe(result);
        })
    })
    describe('getStudentById',()=>{
        it('should return single students',async()=>{
            const result = {'test':{}};
            // jest.spyOn(studentService,'getOne').mockImplementation(()=>result)
            expect(await studentsController.getStudents()).toBe(result);
        })
    })
})