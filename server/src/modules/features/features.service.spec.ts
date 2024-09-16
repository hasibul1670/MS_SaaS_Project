import { Test, TestingModule } from '@nestjs/testing';
import { ApiError } from '../../helpers/utills/ApiError';
import { CreateFeatureDto } from './dto/create-feature.dto';
import { FeatureModel } from './entities/feature.schema';
import { FeaturesService } from './features.service';
jest.mock('./entities/feature.schema.ts');

describe('FeaturesService', () => {
  let service: FeaturesService;
  let featureModelMock: jest.Mocked<typeof FeatureModel>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeaturesService],
    }).compile();

    service = module.get<FeaturesService>(FeaturesService);
    featureModelMock = FeatureModel as jest.Mocked<typeof FeatureModel>;
  });

  it('should create a feature successfully', async () => {
    const createFeatureDto: CreateFeatureDto = {
      moduleName: 'fsssdsds',
    };
    const mockFeature: CreateFeatureDto = {
      moduleName: 'some-model-name',
    };

    featureModelMock.create.mockResolvedValue(mockFeature as any);

    const result = await service.create(createFeatureDto);
    expect(result).toEqual(mockFeature);
    expect(featureModelMock.create).toHaveBeenCalledWith(createFeatureDto);
  });

  it('should throw an error if creation fails', async () => {
    const createFeatureDto: CreateFeatureDto = {
      moduleName: 'f',
    };
    const errorMessage = 'Database error';

    featureModelMock.create.mockRejectedValue(new Error(errorMessage));

    await expect(service.create(createFeatureDto)).rejects.toThrowError(
      ApiError(400, 'Error Occured !!', errorMessage),
    );
  });
});
