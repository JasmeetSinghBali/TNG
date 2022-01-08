import { StudentDTO } from "./student.dto";

/**Request DTO's */
export class TeacherDTO{
    id: string;
    name: string;
    students: StudentDTO;
}
/**Response DTO's */