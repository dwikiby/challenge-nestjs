import { Test, TestingModule } from '@nestjs/testing';
import { AuthHotelController } from './auth-hotel.controller';

describe('AuthHotelController', () => {
  let controller: AuthHotelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthHotelController],
    }).compile();

    controller = module.get<AuthHotelController>(AuthHotelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
