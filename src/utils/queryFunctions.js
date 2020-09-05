import { pool } from '../models/pool';
import {
  insertMessages,
  dropMessagesTable,
  createMessageTable
} from './queries';

// Don't do this in production code
export const executeQueryArray = async array => new Promise((resolve, reject) => {
  try {
    const stop = array.length;
    array.forEach(async (q, index) => {
      await pool.query(q);
      if (index + 1 === stop) resolve();
    });
  } catch (error) {
    console.log('error:', error.toString());
    reject(error);
  }
});

export const dropTables = () => executeQueryArray([ dropMessagesTable ]);
export const createTables = () => executeQueryArray([ createMessageTable ]);
export const insertIntoTables = () => executeQueryArray([ insertMessages ]);
