import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';

@Controller('/:teachersId/students')
export class TeacherStudentController {
  @Get()
  getStudentsForTeacher() {
    return "Return's All Students Associated/Reffernce To Teacher";
  }
  @Put('/:studentId')
  updateTeacherOfStudentById() {
    return "Update's Teacher Associated To Student By Id";
  }
}
