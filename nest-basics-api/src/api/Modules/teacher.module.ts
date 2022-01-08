import { Module } from '@nestjs/common';
import { TeacherController } from '../Controllers/teacher.controller';
import { TeacherStudentController } from '../Controllers/teacher_student.controller';
import { StudentModule } from './student.module';


@Module({
    imports: [StudentModule],
    controllers: [TeacherController,TeacherStudentController]
})
export class TeacherModule{}