import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All Students';
  }
  @Get('/:studentId')
  getStudentById() {
    return 'Get Student By Id';
  }
  @Post()
  createStudent() {
    return "Create's New Student";
  }
  @Put('/:studentId')
  updateStudentById() {
    return "Update's New Student";
  }
}
