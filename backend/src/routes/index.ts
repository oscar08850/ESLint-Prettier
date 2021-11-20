import {Router} from 'express';

const router = Router(); 

import {createSeguimiento,getSeguimientos,getSeguimiento, deleteSeguimiento, updateSeguimiento} from '../controllers/seguimiento.controller';


router.route('/seguimiento')
    .get(getSeguimientos)
    .post(createSeguimiento)

router.route('/seguimiento/:id')
    .get(getSeguimiento)
    .delete(deleteSeguimiento)
    .put(updateSeguimiento)

export default router;