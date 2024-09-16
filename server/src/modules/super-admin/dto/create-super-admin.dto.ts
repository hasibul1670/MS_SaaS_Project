import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { VALIDATION_MESSAGES } from 'src/helpers/validatorMessage/validator-messages';
import { Role } from 'src/middleware/role.decorator';

export class CreateSuperAdminDto {
  @IsEmail({}, { message: `Email${VALIDATION_MESSAGES.IS_EMAIL}` })
  @IsNotEmpty({ message: `Email${VALIDATION_MESSAGES.IS_REQUIRED}` })
  email: string;

  @IsString({ message: `First name${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `First name${VALIDATION_MESSAGES.IS_REQUIRED}` })
  firstName: string;

  @IsString({ message: `Last name${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `Last name${VALIDATION_MESSAGES.IS_REQUIRED}` })
  lastName: string;

  @IsEnum(Role, {
    message: `Role must be one of the following values: ${Object.values(Role).join(', ')}`,
  })
  @IsString({ message: `Role${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `Role${VALIDATION_MESSAGES.IS_REQUIRED}` })
  role: string;

  @IsString({ message: `Password${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `Password${VALIDATION_MESSAGES.IS_REQUIRED}` })
  password: string;

  @IsString({ message: `Phone number${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `Phone number${VALIDATION_MESSAGES.IS_REQUIRED}` })
  phoneNumber: string;

  @IsString({ message: `Profile picture${VALIDATION_MESSAGES.IS_STRING}` })
  @IsNotEmpty({ message: `Profile picture${VALIDATION_MESSAGES.IS_REQUIRED}` })
  profilePicture: string;

  @IsBoolean({ message: `IsActive${VALIDATION_MESSAGES.IS_BOOLEAN}` })
  @IsNotEmpty({ message: `IsActive${VALIDATION_MESSAGES.IS_REQUIRED}` })
  isActive: boolean;
}
