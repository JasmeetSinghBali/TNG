import { Controller, Get, Post, Put, Patch, Delete, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }
  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string
  ) {
    return `Get Student By Id ${studentId}`;
  }
  @Post()
  createStudent(
    @Body() body
  ) {
    return `Create's New Student with details\n ${JSON.stringify(body)}`;
  }
  @Put('/:studentId')
  updateStudentById(
    @Param('studentId') studentId: string,
    @Body() body 
  ) {
    return `Update's\n student id: ${studentId}\n with new data ${JSON.stringify(body)}`;
  }
}
