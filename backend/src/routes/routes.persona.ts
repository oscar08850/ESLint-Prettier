import {Router} from 'express';
import {createPersona,getPersonas,getPersona, deletePersona, updatePersona} from '../controllers/persona.controller'
const router = Router(); 

router.route('/persona')
    .get(getPersonas)
    .post(createPersona)

router.route('/persona/:id')
    .get(getPersona)
    .delete(deletePersona)
    .put(updatePersona)

export default router;