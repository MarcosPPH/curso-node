import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ProfileController from '../controllers/ProfileController';
import isAutenticated from '@shared/http/middlewares/isAuthenticated';

const profilesRouter = Router();
const profilesController = new ProfileController();

profilesRouter.use(isAutenticated);

profilesRouter.get('/', profilesController.show);

profilesRouter.put(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            old_password: Joi.string(),
            password: Joi.string().optional(),
            password_confirmation: Joi.string()
                .valid(Joi.ref('password'))
                .when('password', {
                    is: Joi.exist(),
                    then: Joi.required(),
                }),
        },
    }),
    profilesController.update,
);

export default profilesRouter;
