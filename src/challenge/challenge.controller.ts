import { Body, Controller, Get, Post } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { genderStatus, Test } from './challenge.model';
import { CreateTestDTO } from './dto/create-test.dto';
@Controller('challenge')
export class ChallengeController {
    constructor(private challengeService: ChallengeService) { }

    @Get()
    getAllTests(): Test[] {
        return this.challengeService.getAllTask();
    }

    @Post()
    createTest(@Body() createTestDTO: CreateTestDTO): Test {
        return this.challengeService.createTest(createTestDTO);
    }
}
