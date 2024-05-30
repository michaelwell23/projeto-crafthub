import { Response, Request } from 'express';

import db from '../database/connection';
import { countUsers } from '../utils/countUsers';

export default class Count {
  async index(request: Request, response: Response) {
    try {
      const count = await countUsers();
      response.json({ count });
    } catch (error) {
      response.status(500).json({ error: 'Failed to count users' });
    }
  }
}
