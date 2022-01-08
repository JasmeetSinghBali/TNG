import { Controller, Get, Post, Put, Patch, Delete, Param, Ip } from '@nestjs/common';
import {FindStudentDTO, StudentDTO} from "../DataTransferObjects/student.dto"

@Controller('/:teachersId/students')
export class TeacherStudentController {
  @Get()
  getStudentsForTeacher(
    @Param('teacherId') teacherId: string
  ): FindStudentDTO[]{
    return `Return's All Students Associated/Reffernce To Teacher With TeacherId: ${teacherId}`;
  }
  @Put('/:studentId')
  updateTeacherOfStudentById(
    @Param('teachersId') teachersId: string,
    @Param('studentId') studentId: string,
    @Ip() clientIP: string 
  ): StudentDTO {
    return `clientIP: ${clientIP}\nUpdate's Teacher with ID: ${teachersId}\n Associated To Student With Id: ${studentId}`;
  }
}
