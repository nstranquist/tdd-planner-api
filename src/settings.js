import dotenv from 'dotenv';

dotenv.config();

export const testEnv = process.env.PORT;
export const dbConnectionString = process.env.DB_CONNECTION_STRING;
