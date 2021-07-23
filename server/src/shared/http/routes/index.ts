import { Router } from 'express';
import usertRouter from '@modules/users/routes/users.routes';
import productRouter from '@modules/products/routes/products.routes';
const routes = Router();

routes.use('/users', usertRouter);
routes.use('/products', productRouter);

export default routes;
