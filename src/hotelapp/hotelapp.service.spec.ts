import { Test, TestingModule } from '@nestjs/testing';
import { HotelappService } from './hotelapp.service';

describe('HotelappService', () => {
  let service: HotelappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HotelappService],
    }).compile();

    service = module.get<HotelappService>(HotelappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
