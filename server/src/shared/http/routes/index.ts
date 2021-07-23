import { Router } from 'express';
import userRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import productRouter from '@modules/products/routes/products.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/products', productRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);

export default routes;
