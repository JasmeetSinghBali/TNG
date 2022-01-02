import { Controller, Get, Post, Put, Patch, Delete, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'All Teachers';
  }
  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId:string
  ) {
    return 'Get Teacher By ID: ${teacherId}';
  }
}
