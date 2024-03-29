import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

export const DATABASE_URL = process.env.DATABASE_URL;
export const PORT = process.env.PORT;
