import { Controller, Get, Post, Put, Patch, Delete, Param, Body, ParseUUIDPipe } from '@nestjs/common';
import { CreateStudentDTO, FindStudentDTO, StudentDTO, UpdateStudentDTO } from "../DataTransferObjects/student.dto";
import { StudentService } from '../Services/student.service';

@Controller('students')
export class StudentController {

  /**(DI) StudentService
   * @param studentService 
   * where we define the type as StudentService for studentService param....
   * so this StudentService is now injected as DI 
   * inside of controller via the constructor
   */
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents() : FindStudentDTO[]{ // this means we expect to get an array in response of interface/DTO findstudent
    return this.studentService.getStudents()
  }
  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string
  ): FindStudentDTO { // since only one student is returned so without the [] to non-array type response
    return this.studentService.getStudentById(studentId)
  }
  @Post()
  createStudent(
    @Body() body: CreateStudentDTO
  ) : StudentDTO { // the response is going to be one student so without []
    return this.studentService.createStudent(body)
  }
  @Put('/:studentId')
  updateStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDTO
  ): StudentDTO {
    return this.studentService.updateStudentById(body,studentId);
  }
}
