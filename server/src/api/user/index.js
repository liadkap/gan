import { AsyncRouter } from 'express-async-router';
import * as controller from './userController'
import { isAuth, isAdmin } from '../middlewares'

const router = new AsyncRouter();

router.post('/', isAdmin(), controller.Create);
router.post('/login', controller.Login);

export default router;