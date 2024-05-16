import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/converHourToMinutes';

interface ScheduleItem {
  from: string;
  to: string;
}

export default class servicesControllers {
  async index(request: Request, response: Response) {}

  async create(request: Request, response: Response) {
    const { name, avatar, whatsapp, bio, email, profession, cost, schedule } =
      request.body;

    const trx = await db.transaction();

    try {
      const insertedUserIds = await trx('users').insert({
        name,
        avatar,
        email,
        whatsapp,
        bio,
      });

      const user_id = insertedUserIds[0];

      const insertedServicesIds = await trx('services').insert({
        profession,
        cost,
        user_id,
      });

      const services_id = insertedServicesIds[0];

      const servicesSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          services_id,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
        };
      });

      await trx('services_schedule').insert(servicesSchedule);

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
