import { Controller, Get, Post, Put, Patch, Delete, Param } from '@nestjs/common';
import { TeacherDTO } from '../DataTransferObjects/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): TeacherDTO[] {
    return 'All Teachers';
  }
  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId') teacherId:string
  ): TeacherDTO {
    return 'Get Teacher By ID: ${teacherId}';
  }
}
