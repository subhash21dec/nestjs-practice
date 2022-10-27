import { Test, TestingModule } from '@nestjs/testing';
import { LessonNoSpecService } from './lesson--no-spec.service';

describe('LessonNoSpecService', () => {
  let service: LessonNoSpecService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonNoSpecService],
    }).compile();

    service = module.get<LessonNoSpecService>(LessonNoSpecService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
