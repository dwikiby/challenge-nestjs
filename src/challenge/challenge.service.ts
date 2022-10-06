import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTestDTO } from './dto/create-test.dto';
import { genderStatus, Test } from './challenge.model';
import { GetTestStatusFilterDto } from './dto/get-test.filter';

@Injectable()
export class ChallengeService {
    private tests: Test[] = []; // bikin variabel tasks yang memanggil objek Task

    getAllTask() {
        return this.tests;
    }

    getTestWithFilter(filterDto: GetTestStatusFilterDto): Test[] {
        const { gender, search } = filterDto;

        let tests = this.getAllTask();

        //seleksi gender
        if (gender) {
            tests = tests.filter((test) => test.gender === gender);
        }

        //seleksi full_name
        if (search) {
            tests = tests.filter((test) => {
                if (test.full_name.includes(search) || test.motto.includes(search)) {
                    return true;

                }
                return false;

            });

        }
        return tests
    }

    createTest(createTestDTO: CreateTestDTO): Test { // createTaskDTO = variabel, CreateTaskDTO = objek
        const {
            full_name, motto, cv
        } = createTestDTO;

        const test: Test = {
            id: uuid(),
            full_name,
            motto,
            cv,
            gender: genderStatus.PRIA //default TaskStatus Open
        };
        this.tests.push(test);
        return test;
    }

    getTestById(id: string): Test { // get data by id
        const found = this.tests.find((test) => test.id === id);
        if (!found) {
            throw new NotFoundException('Task not found');
        }
        return found;
    }

    updateTestStatus(id: string, full_name: string, motto: string, cv: string, gender: genderStatus) {
        const test = this.getTestById(id);
        test.full_name = full_name;
        test.motto = motto;
        test.cv = cv;
        test.gender = gender;
        return test;
    }

    deleteTest(id: string): void {
        const found = this.getTestById(id);
        this.tests = this.tests.filter((test) => test.id !== found.id)
    }
}
