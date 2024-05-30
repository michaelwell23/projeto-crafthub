import { Router } from 'express';
import ServicesControllers from './controllers/ServicesController';
import ConnectionController from './controllers/ConnectionsController';
import CountControllers from './controllers/CountControllers';

const routes = Router();

const servicesControllers = new ServicesControllers();
const connectionController = new ConnectionController();
const countControllers = new CountControllers();

routes.get('/services', servicesControllers.index);
routes.get('/all-services', servicesControllers.getAll);
routes.post('/services', servicesControllers.create);

routes.get('/connections', connectionController.index);
routes.post('/connections', connectionController.create);

routes.get('/count/users', countControllers.index);

export default routes;
