import { Test, TestingModule } from '@nestjs/testing';
import { GuestappService } from './guestapp.service';

describe('GuestappService', () => {
  let service: GuestappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestappService],
    }).compile();

    service = module.get<GuestappService>(GuestappService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
