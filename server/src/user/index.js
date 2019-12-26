import { AsyncRouter } from 'express-async-router';
import * as controller from './userController'

const router = new AsyncRouter();

router.get('/', controller.GetAll);
router.post('/', controller.Create);

export default router;