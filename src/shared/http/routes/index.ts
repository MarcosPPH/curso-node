import customersRouter from '../../../modules/customers/routes/customers.routes';
import ordersRouter from '../../../modules/orders/routes/orders.routes';
import productsRouter from '../../../modules/products/routes/products.routes';
import passwordRouter from '../../../modules/users/routes/password.routes';
import profilesRouter from '../../../modules/users/routes/profiles.routes';
import sessionsRouter from '../../../modules/users/routes/sessions.routes';
import usersRouter from '../../../modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profilesRouter);
routes.use('/customers', customersRouter);
routes.use('/orders', ordersRouter);

export default routes;
