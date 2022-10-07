import { Test, TestingModule } from '@nestjs/testing';
import { GuestappController } from './guestapp.controller';

describe('GuestappController', () => {
  let controller: GuestappController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestappController],
    }).compile();

    controller = module.get<GuestappController>(GuestappController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
