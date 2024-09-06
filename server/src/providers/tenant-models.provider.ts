import { User, UserSchema } from 'src/modules/user/entities/user.entity';
import { createModelProvider } from '../helpers/utills/tenantUtils';

const userModelProvider = createModelProvider(
  User.name,
  UserSchema,
  'TENANT_CONNECTION',
);

export const tenantModels = {
  userModel: userModelProvider,
};
