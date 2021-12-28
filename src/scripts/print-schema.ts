import { printSchema } from 'graphql';
import schema from '../schema';

(async () => {
  process.stdout.write(printSchema(schema));
})();
