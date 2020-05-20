import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import CreateUserService from '@modules/users/services/CreateUserService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UpdatedUserAvatarService from '@modules/users/services/UpdateUserAvatarService';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepositories';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const usersRepository = new UsersRepository();
  const createUserService = new CreateUserService(usersRepository);

  const user = await createUserService.execute({ name, email, password });

  delete user.password;

  return response.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (request, response) => {
    const usersRepository = new UsersRepository();
    const updatedUserAvatar = new UpdatedUserAvatarService(usersRepository);

    const user = await updatedUserAvatar.execute({
      user_id: request.user.id,
      avatarFilename: request.file.filename,
    });

    delete user.password;

    return response.json(user);
  },
);

export default usersRouter;
