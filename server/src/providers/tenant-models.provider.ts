import { Bill, BillSchema } from 'src/modules/bill/schema/bill.schema';
import { User, UserSchema } from 'src/modules/user/schema/user.schema';
import { createModelProvider } from '../helpers/utills/tenantUtils';

const userModelProvider = createModelProvider(
  User.name,
  UserSchema,
  'TENANT_CONNECTION',
);

const billModelProvider = createModelProvider(
  Bill.name,
  BillSchema,
  'TENANT_CONNECTION',
);

export const tenantModels = {
  userModel: userModelProvider,
  billModel: billModelProvider,
};
