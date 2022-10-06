import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTestDTO } from './dto/create-test.dto';
import { genderStatus, Test } from './challenge.model';

@Injectable()
export class ChallengeService {
    private tests: Test[] = []; // bikin variabel tasks yang memanggil objek Task

    getAllTask() {
        return this.tests;
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
}
