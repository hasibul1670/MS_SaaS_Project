import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFeatureDto {
  @IsString({ message: 'module Name must be a string' })
  @IsNotEmpty({ message: 'module Name is required' })
  moduleName: string;
}
