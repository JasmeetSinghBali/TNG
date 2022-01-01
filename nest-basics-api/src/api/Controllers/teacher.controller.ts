import { Controller,Get,Post,Put,Patch,Delete } from "@nestjs/common";

@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers(){
        return "All Teachers"
    }
    @Get('/:teacherId')
    getTeacherById(){
        return "Get Teacher By Id"
    }
    // should be in as a seperate controller for scalability
    @Get('/:teacherId/students')
    getStudentsForTeacher(){
        return "Return's All Students Associated/Reffernce To Teacher"
    }
    @Put('/:teacherId/students/:studentId')
    updateStudentOfTeacherById(){
        return "Update's Student Associated To Teacher By Id"
    }
}