import { AsyncRouter } from 'express-async-router';
import * as controller from './galleryController'

const router = new AsyncRouter();

router.get('/', controller.GetAll);
router.post('/', controller.upload);

export default router;