import { Body, Controller, Get, Post, Param, Delete, Patch, Query } from '@nestjs/common';
import { ChallengeService } from './challenge.service';
import { genderStatus, Test } from './challenge.model';
import { CreateTestDTO } from './dto/create-test.dto';
import { GetTestStatusFilterDto } from './dto/get-test.filter';
@Controller('challenge')
export class ChallengeController {
    constructor(private challengeService: ChallengeService) { }

    // @Get()
    // getAllTests(): Test[] {
    //     return this.challengeService.getAllTask();
    // }

    @Get()
    getAllTests(@Query() filterDto: GetTestStatusFilterDto): Test[] {
        if (Object.keys(filterDto).length) {
            return this.challengeService.getTestWithFilter(filterDto);
        } else {
            return this.challengeService.getAllTask();
        }
    }

    @Get('/:id') //method get data by id
    getTestById(@Param('id')
    id: string
    ): Test {
        return this.challengeService.getTestById(id);
    }

    @Delete('/:id') //method delete data
    deleteTest(@Param('id') id: string): void {
        return this.challengeService.deleteTest(id);
    }

    @Post()
    createTest(@Body() createTestDTO: CreateTestDTO): Test {
        return this.challengeService.createTest(createTestDTO);
    }

    @Patch('/:id') //method update data
    updateTestStatus(
        @Param('id') id: string,
        @Body('full_name') full_name: string,
        @Body('motto') motto: string,
        @Body('cv') cv: string,
        @Body('gender') gender: genderStatus,

    ): Test {
        return this.challengeService.updateTestStatus(id, full_name, motto, cv, gender);
    }
}
