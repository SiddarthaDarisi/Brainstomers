// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Content, Candidate } = initSchema(schema);

export {
  Content,
  Candidate
};