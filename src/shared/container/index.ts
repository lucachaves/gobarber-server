import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppoitmentRepository from '@modules/appointments/repositories/IAppointmentsRepository';
import AppoitmentRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUserTokensRepository from '@modules/users/repositories/IUserTokenRepository';
// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IAppoitmentRepository>(
  'AppoitmentRepository',
  AppoitmentRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);
