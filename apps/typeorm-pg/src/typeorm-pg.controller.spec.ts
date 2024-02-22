import { Test, TestingModule } from '@nestjs/testing';
import { TypeormPgController } from './typeorm-pg.controller';
import { TypeormPgService } from './typeorm-pg.service';

describe('TypeormPgController', () => {
  let typeormPgController: TypeormPgController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TypeormPgController],
      providers: [TypeormPgService],
    }).compile();

    typeormPgController = app.get<TypeormPgController>(TypeormPgController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(typeormPgController.getHello()).toBe('Hello World!');
    });
  });
});
