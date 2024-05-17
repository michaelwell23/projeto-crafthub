import { Request, Response } from 'express';

import db from '../database/connection';

interface ScheduleItem {
  from: string;
  to: string;
}

export default class servicesControllers {
  async index(request: Request, response: Response) {
    const filters = request.query;

    const profession = filters.profession as string;

    if (!filters.profession) {
      return response.status(400).json({
        error: 'Missing filters to search services',
      });
    }
    try {
      const professionals = await db('services')
        .where('services.profession', '=', profession)
        .join('users', 'services.user_id', '=', 'users.id')
        .select(['services.*', 'users.*']);

      return response.json(professionals);
    } catch (error) {
      return response.status(500).json({
        error: 'Error while fetching services',
      });
    }
  }

  async create(request: Request, response: Response) {
    const { name, avatar, whatsapp, bio, email, profession, cost, schedule } =
      request.body;

    const trx = await db.transaction();

    try {
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        email,
        whatsapp,
        bio,
      });

      const user_id = insertedUsersIds[0];

      const insertedServicesIds = await trx('services').insert({
        profession,
        cost,
        user_id,
      });

      const services_id = insertedServicesIds[0];

      const servicesSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          services_id,
          from: scheduleItem.from,
          to: scheduleItem.to,
        };
      });

      await trx('service_schedule').insert(servicesSchedule);

      await trx.commit();

      return response.status(201).send();
    } catch (err) {
      console.log(err);

      await trx.rollback();

      return response.status(400).json({
        error: 'Unexpected error while creating new class',
      });
    }
  }
}
