import { Router } from 'express';
import ServicesControllers from './controllers/ClassesController';

const routes = Router();
const servicesControllers = new ServicesControllers();

routes.post('/services', servicesControllers.create);

export default routes;
