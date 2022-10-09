import { Test, TestingModule } from '@nestjs/testing';
import { HotelappController } from './hotelapp.controller';

describe('HotelappController', () => {
  let controller: HotelappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelappController],
    }).compile();

    controller = module.get<HotelappController>(HotelappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
