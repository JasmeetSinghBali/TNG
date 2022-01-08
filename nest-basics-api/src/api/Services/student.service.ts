import { Injectable} from "@nestjs/common";
import { students} from "../../mockDB/db";
import { CreateStudentDTO, FindStudentDTO, StudentDTO, UpdateStudentDTO } from "../DataTransferObjects/student.dto";
import { v4 as uuid} from "uuid";

@Injectable()
export class StudentService{
    /**Usual OOPS
     * make a call here to get you data and 
     * store it up top to be accesible by 'this' inside this class only
     * by specifying it as 'private' member so it is not directly accesible outside this class
     * const obj = new StudentService
     * obj.students ---> ❌ Error
     * 'readonly' so that it wont be manipulated 
     * */ 
    private students = students
    getStudents(): FindStudentDTO[]{
        return this.students
    }
    getStudentById(studentID: string): FindStudentDTO{
        return this.students.find((student)=>{
            return studentID === student.id
        })
    }
    createStudent(payload: CreateStudentDTO): StudentDTO{
        let newSt = {
            ...payload,
            id: uuid()
        }
        this.students.push(newSt)
        return newSt
    }
    updateStudentById(payload: UpdateStudentDTO,studentID: string): StudentDTO{
        let updateSt: StudentDTO;
        const updatedStudentList = this.students.map((student)=>{
            if(studentID === student.id){
                updateSt = {
                    id: student.id,
                    ...payload
                } 
            }else{
                return student
            }
        })
        this.students = updatedStudentList;
        return updateSt
    }
}
