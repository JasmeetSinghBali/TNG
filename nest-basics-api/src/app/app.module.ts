import { Module } from '@nestjs/common';
import { StudentController } from 'src/api/Controllers/student.controller';
import { TeacherController } from 'src/api/Controllers/teacher.controller';

@Module({
  imports: [],
  controllers: [StudentController,TeacherController]
})
export class AppModule {}
