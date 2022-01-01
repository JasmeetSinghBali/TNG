import { Module } from '@nestjs/common';
import { StudentController } from 'src/api/Controllers/student.controller';
import { TeacherController } from 'src/api/Controllers/teacher.controller';
import { TeacherStudentController } from 'src/api/Controllers/teacher_student.controller';

@Module({
  imports: [],
  controllers: [StudentController, TeacherController, TeacherStudentController],
})
export class AppModule {}
