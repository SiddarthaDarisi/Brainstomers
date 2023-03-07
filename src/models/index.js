// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Userdetails, Signin, Signup } = initSchema(schema);

export {
  Userdetails,
  Signin,
  Signup
};