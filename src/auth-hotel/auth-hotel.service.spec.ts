import { Test, TestingModule } from '@nestjs/testing';
import { AuthHotelService } from './auth-hotel.service';

describe('AuthHotelService', () => {
  let service: AuthHotelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthHotelService],
    }).compile();

    service = module.get<AuthHotelService>(AuthHotelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
