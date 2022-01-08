import { Module } from '@nestjs/common';
import { StudentModule } from 'src/api/Modules/student.module';
import { TeacherModule } from 'src/api/Modules/teacher.module';


@Module({
  imports: [TeacherModule,StudentModule],
})
export class AppModule {}