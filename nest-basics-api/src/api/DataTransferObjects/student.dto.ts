/**
 * Request DTO's
 */
export class CreateStudentDTO {
    name: string;
    teacher: string;
}
export class UpdateStudentDTO {
    name: string;
    teacher: string;
}

/**Response DTO's */
export class FindStudentDTO{
    id: string;
    name: string;
    teacher: string;
}
export class StudentDTO{
    id: string;
    name: string;
    teacher: string;
}